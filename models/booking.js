// Example Booking Schema (models/Booking.js)
const mongoose = require("mongoose");
const User = require("./user.js");
const Listing = require("./listing.js");

const bookingSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  checkIn: {
    type: Date,
    validate: {
      validator: function (value) {
        return value >= new Date().setHours(0,0,0,0); // Only today or future
      },
      message: "Check-in date cannot be in the past."
    }
  },
  checkOut: {
    type: Date,
    validate: {
      validator: function (value) {
        return value >= new Date().setHours(0,0,0,0); // Only today or future
      },
      message: "Check-out date cannot be in the past."
    }
  },
  guests: { type: Number, required: true },
  paymentId: String,
  orderId: String,
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending"
  },
  booking_date: {
    type : Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
