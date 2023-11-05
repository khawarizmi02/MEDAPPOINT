const mongoose = require('mongoose');
const HealthCenter = require('./healthCenter');

const queSchema = new mongoose.Schema({

	queNum: {
		type: [Number],
		required: true,
	},

	healthCenter: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'HealthCenter',
	},
});

module.exports = mongoose.model('Que', queSchema);