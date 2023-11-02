const express = require('express');
const router = express.Router();
const HealthCenter = require('../schemas/healthCenter');

// get all list of the hospital
router.get('/', async (req, res) => {
  try {
    const healthCenter = await HealthCenter.find();

    if (!healthCenter)
      return res.status(404).json({ message: 'Health centers cannot be find' });

    res.status(200).json({ message: 'success', healthCenter: healthCenter });
  } catch (error) {
    res.status(404).json({ message: 'Health Centers cannot find' });
  }
});

// get one health center
router.get('/:id', async (req, res) => {
  try{
    const healthCenter = await HealthCenter.findById(req.params.id);

    if(!healthCenter) 
      return res.status(404).json({ message: 'cannot find health center' });

    res.status(200).json({ message: 'Healt center has been found', healthCenter: healthCenter })
  }catch (error){
    res.status(404).json({ message: 'cannot find health center' });
  }
})

// add new health center
router.post('/', async (req, res) => {
  const newHealthCenter = new HealthCenter(req.body);
  try {
    await newHealthCenter.save();
    res.status(201).json({
      message: 'New health center succcessfully added',
      newHealthCenter: newHealthCenter,
    });
  } catch (error) {
    res.status(500).json({ message: 'Health center cannot be registered' });
  }
});

module.exports = router;
