const express = require('express');
const router = express.Router();
const HealthRecord = require('../schemas/healthRecord');
const Patient = require('../schemas/patient');
const Chief = require('../schemas/chief');
const HealthCenter = require('../schemas/healthCenter');

// get all history based on the patient ID
router.get('/:id', async (req, res) => {
	try {
		const patient = await Patient.findById(req.params.id);

		if (!patient) {
			return res.status(404).json({ message: 'No patient found' });
		}

		const records = await HealthRecord.find({ patient: patient._id });

		if (records.length === 0) {
			return res.status(404).json({ message: 'Ne records found from patient' });
		}

		res.json(records);
	} catch (error) {
		console.error('Error fetching patient records:', error);
		res.status(500).json({ error: 'Error fetching patient records' });
	}
});

// post new healthRecord
router.post('/', async (req, res) => {
	const { patient, healthCenter, chief,
		dateSubmit, regNum, diagnosis,
		chiefComplain, HPI, PMHx,
		medicationHistory } = req.body;

	try {
		const [patientExists, healthCenterExists, chiefExists] = await Promise.all([
			Patient.findById(patient),
			HealthCenter.findById(healthCenter),
			Chief.findById(chief),
		]);

		if (!patientExists)
			return res.status(404).json({ message: 'patientID cannot be found' });
		if (!healthCenterExists)
			return res.status(404).json({ message: 'Health center cannot be found' });
		if (!chiefExists)
			return res.status(404).json({ message: 'Chief cannot be found' });

		const newHealthRecord = new HealthRecord({ patient, healthCenter, chief, regNum, diagnosis, chiefComplain, HPI, PMHx, medicationHistory });
		await newHealthRecord.save();

		res.status(201).json({
			message: 'new health record added',
			healthRecord: newHealthRecord,
		});
	} catch (error) {
		res.status(500).json({ message: 'cannot add new health record', error: error.message });
	}
});

module.exports = router;
