const express = require('express');
const router = express.Router();
const { isLoggedin } = require("../middleware.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Wishlist = require("../models/wishlist.js");

router.post('/wishlist', isLoggedin, async (req, res) => {
  try {
    const { listingId } = req.body;
    const userId = req.user._id;

    if (!listingId) {
      return res.status(400).json({ success: false, message: 'Listing ID is required' });
    }

    // Check if already in wishlist
    const existing = await Wishlist.findOne({ user: userId, listing: listingId });

    if (existing) {
      return res.status(409).json({ success: false, message: 'Already in wishlist' });
    }

    await Wishlist.create({ user: userId, listing: listingId });

    return res.status(201).json({ success: true, message: 'Added to wishlist' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

router.get("/:id/wishlist",async (req, res) => {
  let { id } = req.params;
  let wishlists = await Wishlist.find({user: id});
  let listingIds = []; 
  let listings = [];
  for(wishlist of wishlists){
    listingIds.push(wishlist.listing);
  }
  for(id of listingIds){
    let listing = await Listing.findById(id);
    listings.push(listing);
  }
  res.render("partials/wishlist.ejs" , {listings})
});

router.delete('/wishlist/:id', async (req, res) => {
  let { id } = req.params;
  const userId = req.user._id;
  let deletedWishlist = await Wishlist.deleteOne({listing: id, user: userId});
  req.flash("success", "removed from wishlist.");
  res.redirect(`/profile/${userId}`);
})

module.exports = router;
