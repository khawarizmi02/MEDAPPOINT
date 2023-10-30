const mongoose = require('mongoose');
const MedicationHistory = require('./medicationHistory');

const healthRecordSchema = new mongoose.Schema({
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
  },

  medicationHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MedicationHistory'
  },
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
