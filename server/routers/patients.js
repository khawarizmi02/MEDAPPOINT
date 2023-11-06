const express = require('express');
const router = express.Router();
const Patient = require('../schemas/patient');

// Add new profile
router.post('/', async (req, res) => {
	const newPatient = new Patient(req.body);
	try {
		await newPatient.save();
		res.json({ message: 'Patient added successfully', patient: newPatient });
	} catch (error) {
		res.status(500).json({ error: 'Error adding new patient' });
	}
});

// Update patient profile
router.patch('/:id', async (req, res) => {
	const patientId = req.params.id;

	try {
		const updatedPatient = await Patient.findByIdAndUpdate(
			patientId,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!updatedPatient) {
			return res.status(404).json({ error: 'Patient not found' });
		}

		res.json({
			message: 'Patient updated successfully',
			patient: updatedPatient,
		});
	} catch (error) {
		res.status(500).json({ error: 'Error updating patient' });
	}
});

// get one profile based on the id value
router.get('/:id', async (req, res) => {

	try {
		const patientInfo = await Patient.findById(req.params.id);

		if (!patientInfo) {
			return res.status(404).json({ error: 'Patient info cannot be found' });
		}

		res.json(patientInfo);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
});

// login patient
router.post('/login', async (req, res) => {
	const { email, icNum } = req.body;

	try {
		const patient = await Patient.findByCredentials(email, icNum);

		if (!patient) {
			return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
		}

		const token = await patient.generateAuthToken();

		res.json({ patient, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
