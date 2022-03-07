const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Guest', guestSchema);