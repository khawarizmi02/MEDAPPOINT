const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('Hello this is patients route')
})


module.exports = router;
