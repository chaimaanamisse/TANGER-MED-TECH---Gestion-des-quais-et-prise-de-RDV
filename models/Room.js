const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  number: { type: String, required: true },
  room_type_id: { type: String, required: true },
});

module.exports = mongoose.model('Room', roomSchema);