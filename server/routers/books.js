const express = require('express');
const router = express.Router();
const Patient = require('../schemas/patient');
const HealthCenter = require('../schemas/healthCenter');
const Book = require('../schemas/book');

// find book info based on the user id and booking date
router.get('/:id', async (req, res) => {
	const patientId = req.params.id;

	try {
		const appointment = await Book.findOne({ patient: patientId, bookTime: { $gte: Date.now() } });

		if (!appointment) return res.status(404).json({ message: 'Appointment cannot be found' })

		res.status(200).json({ message: 'Appointment successfull found', appointmentInfo: appointment });
	} catch (error) {
		res.status(500).json({ message: 'Booking appointment cannot be found' });
	}
});

// set a new booking date
router.post('/', async (req, res) => {
	const newBook = new Book(req.body);
	try {
		const patient = await Patient.findById(req.body.patient);

		if (!patient)
			return res.status(404).json({ message: 'Server cannot find patient' });

		const healthCenter = await HealthCenter.findById(req.body.healthCenter);

		if (!healthCenter)
			return res
				.status(404)
				.json({ message: 'Server cannot find the health center' });

		await newBook.save();
		res
			.status(201)
			.json({ message: 'Succesfully added new book', newBook: newBook });
	} catch (error) {
		res.status(404).json({ message: 'Error in finding data' });
	}
});

// delete a booking date
router.delete('/:id', async (req, res) => {
	try {
		const bookInfo = await Book.findById(req.params.id);

		if (!bookInfo)
			return res.status(404).json({ message: 'Book info failed to find' });

		await bookInfo.remove();
		res.json({ message: 'Successfully deleted book' });
	} catch (error) {
		res.status(404).json({ message: 'Book info cannot be found' });
	}
});

// update a booking que number
router.patch('/:id', async (req, res) => {
	try {
		const bookInfo = await Book.findOneAndUpdate(
			{ healthCenter: req.params.id },
			{ $set: { queNum: req.body.queNum } },
			{ new: true }
		);

		if (!bookInfo)
			return res.status(404).json({ message: 'Book info failed to find' });

		res.json({ message: 'Successfully updated book', bookInfo: bookInfo });

	} catch (error) {
		res.status(500).json({ message: 'Book info cannot be found', error: error });
	}
});

module.exports = router;
