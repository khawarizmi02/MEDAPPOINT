const express = require('express');
const router = express.Router();

// pass back the test data using post method
router.post('/', async (req, res) => {
	try {
		res.json({
			message: 'test data',
			data: req.body,
		});
	} catch (error) {
		console.error('Error fetching test data:', error);
		res.status(500).json({ error: 'Error fetching test data' });
	}
});

module.exports = router;