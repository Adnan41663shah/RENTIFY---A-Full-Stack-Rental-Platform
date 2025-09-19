const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.js");
const Listing = require("./listing.js");

const wishlistSchema = new Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User', required: true 
  },
  listing: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Listing', required: true 
  },
});

module.exports = mongoose.model('Wishlist', wishlistSchema);