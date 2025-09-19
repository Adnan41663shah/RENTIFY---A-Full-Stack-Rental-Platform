const express = require("express");
const router = express.Router();
const User = require("../models/user.js")
const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");

router.get('/:id/myListings', async (req, res) => {
  let { id } = req.params;
  const listings = await Listing.find({owner: id});
  res.render('partials/myListings', {listings});
});

router.get('/:id/myBookings', async (req, res) => {
  try {
    const { id } = req.params;

    // Get all bookings for the user
    const booking_details = await Booking.find({ user: id });

    // Get all the listing IDs from the bookings
    const listingIds = booking_details.map(b => b.listing);

    // Fetch all listings at once that match these IDs
    const listings = await Listing.find({ _id: { $in: listingIds } });

    // Merge each booking with its corresponding listing
    const bookings = booking_details.map(booking => {
      const listing = listings.find(l => String(l._id) === String(booking.listing));
      return { ...listing.toObject(), booking: booking.toObject() };
    });
    // Pass the combined array to the template
    res.render('partials/myBookings', { bookings });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



module.exports = router;