const mongoose = require('mongoose');
const Patient = require('./patient');

const medicationHistorySchema = new mongoose.Schema({
  drugs: {
    type: String,
    required: true,
  },
  indication: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  durations: {
    type: Number,
    required: true,
  },
});

const healthRecordSchema = new mongoose.Schema({

  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },

  dateSubmit: {
    type: Date,
    required: true,
    default: Date.now,
},

  regNum: {
    type: Number,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  chiefComplain: {
    type: String,
    required: true,
  },
  HPI: {
    type: String,
    required: true,
  },
  PMHx: {
    type: [String],
    required: false,
  },

  medicationHistory: [medicationHistorySchema],
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
