const mongoose = require('mongoose');
const HealthCenter = require('./healthCenter');

const queSchema = new mongoose.Schema({

	queNum: {
		type: [Number],
		required: false,
	},

	healthCenter: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'HealthCenter',
		required: true,
	},
});

module.exports = mongoose.model('Que', queSchema);