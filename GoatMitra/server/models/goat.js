const mongoose = require('mongoose');
const GoatPalak = require('./goatPalak');

const goatSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  dob: {
    type: Date,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  goatPalakId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GoatPalak',
    required: true
  },
  vaccinationDate: {
    type: Date,
  },
  name:{
    type: String,
    required: true
  }
});

const Goat = mongoose.model('Goat', goatSchema);

module.exports = Goat;