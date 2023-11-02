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
  const newHealthRecord = new HealthRecord(req.body);

  try {
    const patient = await Patient.findById(req.body.patient);
    if (!patient)
      return res.status(404).json({ message: 'patientID cannot be found' });

    const healthCenter = await HealthCenter.findById(req.body.healthCenter);
    if (!healthCenter)
      return res.status(404).json({ message: 'Health center cannot be found' });

    const chief = await Chief.findById(req.body.chief);
    if (!chief)
      return res.status(404).json({ message: 'Chief cannot be found' });

    await newHealthRecord.save();
    res.status(201).json({
      message: 'new health record added',
      healthRecord: newHealthRecord,
    });
  } catch (error) {
    res.status(404).json({ message: 'cannot add new health record' });
  }
});

module.exports = router;
