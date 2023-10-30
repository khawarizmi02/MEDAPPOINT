const mongoose = require('mongoose')

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
})

module.exports = mongoose.model(MedicationHistory, medicationHistorySchema)
