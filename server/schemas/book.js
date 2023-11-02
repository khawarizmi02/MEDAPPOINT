const mongoose = require('mongoose');
const Patient = require('./patient');
const HealthCenter = require('./healthCenter');

const insuranceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },

  memberId: {
    type: String,
    required: true,
  },
});

const bookSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },

  healthCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HealthCenter',
    required: true,
  },

  medicalConcern: {
    type: String,
    required: true,
  },

  bookTime: {
    type: Date,
    required: true,
  },

  bookSession: {
    type: String,
    required: true,
  },

  insurance: {
    type: insuranceSchema,
    required: false,
  },

  queNum: {
    type: Number,
    required: false,
  },

  onSession: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Book', bookSchema);
