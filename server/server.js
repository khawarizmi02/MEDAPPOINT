const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = 5000;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

mongoose.connect(process.env.MONGODB_CONNECT);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () =>
  console.log(`MongoDB connected on ${process.env.MONGODB_CONNECT}`)
);

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
