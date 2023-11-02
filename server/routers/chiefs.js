const express = require('express');
const router = express.Router();
const Chief = require('../schemas/chief');

// get Chief Info base on ID
router.get('/:id', async (req, res) => {
  try {
    const chiefInfo = await Chief.findById(req.params.id);

    if (!chiefInfo)
      return res.status(404).json({ message: 'Chief info failed to find' });

    res.json(chiefInfo);
  } catch (error) {
    res.status(404).json({ message: 'Chief info cannot be found' });
  }

});

router.post('/', async (req, res) => {
  const newChief = new Chief(req.body);

  try {
    await newChief.save();
    res.status(201).json({ message: 'Successfully added new chief' });
  } catch (error) {
    res.status(500).json({ message: 'Error to add new Chief' });
  }
});

module.exports = router;
