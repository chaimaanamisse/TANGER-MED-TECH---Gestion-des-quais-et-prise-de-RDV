// const mongoose = require('mongoose');

// const reservationSchema = mongoose.Schema({
//   dateIn: { type: Date, required: true },
//   dateOut: { type: Date, required: true },
//   guestId: { type: String, required: true }
// });

// module.exports = mongoose.model('Reservation', reservationSchema);

const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");

// const Schema = new mongoose.Schema({
//   Date_in: {
//     type: Date,
//     required: [true, "Please fill Date in"],
//     default:new Date()
//   },
//   Date_out: {
//     type: Date,
//     required: [true, "Please fill Date out"],
//   },
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: [true, "Please fill user id"],
//     default:new Date()

//   },
//   room_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: [true, "Please fill room id"],
//   }
// });

// const Booking = mongoose.model("booking", bookingSchema);
// module.exports = Booking;



const reservationSchema = mongoose.Schema({
  nom: { type: String, required: true },
  longueur: { type: String, required: true },
  largeur: { type: String, required: true },
  room_type_id: { type: String, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);