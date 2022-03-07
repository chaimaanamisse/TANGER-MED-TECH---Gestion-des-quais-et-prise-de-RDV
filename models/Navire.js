const mongoose = require("mongoose");
const navireSchema = mongoose.Schema({
  nom: { type: String, required: true },
  longueur: { type: String, required: true },
  largeur: { type: String, required: true },
  provenance: { type: String, required: true },
  destination: { type: String, required: true },
  jour_arrivee: { type: Date, required: true },
  jour_depart: { type: Date, required: true },
  room_type_id: { type: String, required: true },
});

module.exports = mongoose.model('Navire', navireSchema);

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


