const express = require('express')
const app = express();
const mongodb = require('mongoose')
require('dotenv').config()

const PORT = 5000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT , console.log(`Server run on PORT ${PORT}`))
