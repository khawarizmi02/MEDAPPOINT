const express = require('express');
const router = express.Router();
const Que = require('../schemas/que');
const HealthCenter = require('../schemas/healthCenter');

// get Que Info base on healthCenter ID
router.get('/:id', async (req, res) => {
	try {
		const queInfo = await Que.findOne({ healthCenter: req.params.id });

		if (!queInfo)
			return res.status(404).json({ message: 'Que info failed to find' });

		res.json(queInfo);
	} catch (error) {
		res.status(404).json({ message: 'Que info cannot be found' });
	}

});

// add new que base on healthCenter ID
router.post('/:id', async (req, res) => {
	const newQue = new Que(req.body);
	const healthCenter = await HealthCenter.findById(req.params.id);

	try {
		newQue.healthCenter = healthCenter;
		await newQue.save();
		res.status(201).json({ message: 'Successfully added new que' });
	} catch (error) {
		res.status(500).json({ message: 'Error to add new que' });
	}
});

// update que base on healthCenter ID
router.patch('/:id', async (req, res) => {
	try {
		const queInfo = await Que.findOne({ healthCenter: req.params.id });

		if (!queInfo)
			return res.status(404).json({ message: 'Que info failed to find' });

		queInfo.queNum = req.body.queNum;

		await queInfo.save();
		res.json({ message: 'Successfully updated que' });
	} catch (error) {
		res.status(404).json({ message: 'Que info cannot be found' });
	}
});

module.exports = router;