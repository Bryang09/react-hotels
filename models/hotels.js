const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const HotelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

module.exports = Hotels = mongoose.model("Hotels", HotelSchema);
