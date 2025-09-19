require("dotenv").config();
// const axios = require("axios");

const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/index", { allListings });
}

module.exports.allListing = async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/listings", { allListings });
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
}

module.exports.createNewListing = async (req, res) => {
    const address = req.body.listing.location;
    // Google Geocoding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    const data = await response.json();
    const { lat, lng } = data.results[0].geometry.location;    // console.log(data);

  const url = req.file.path;
  const filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url,filename};

  newListing.geometry.type = "Point";
  newListing.geometry.coordinates = [lng, lat]; 

  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created.");
  res.redirect("/listings");
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate: { path:"author"}}).populate("owner");
    if (!listing) {
      req.flash("error", "Listing Does not Exist");
      return res.redirect("/listings")
    }
    
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    res.render("listings/show", { listing, GOOGLE_MAPS_API_KEY});
}

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing Does not Exist");
    return res.redirect("/listings")
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_70,w_110");
  res.render("listings/edit", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;

  try {
    // Update the listing and return the updated document
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    const address = listing.location;
    // Google Geocoding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    const data = await response.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      listing.geometry.type = "Point";
      listing.geometry.coordinates = [lng, lat];
    }

    if (req.file) {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
    }

    await listing.save();

    req.flash("success", "Listing Updated.");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong while updating the listing.");
    res.redirect(`/listings/${id}`);
  }
};

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted.");
    res.redirect("/listings");
}