const mongoose = required('mongoose')
const HealthCenter = reuired('./healthCenter')

const chiefSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  idNum: {
    type: String,
    required: true,
  },

  phoneNum: {
    type: String,
    required: true,
  },

  officeNum: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  healthCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HealthCenter',
  },
});

module.exports = mongoose.model('Chief', chiefSchema);
