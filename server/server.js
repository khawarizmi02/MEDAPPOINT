const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = 5000;

app.use(bodyParser.json());
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

const patientsRouter = require('./routers/patients.js');
app.use('/patients', patientsRouter);

const healthRecordRouter = require('./routers/healthRecords');
app.use('/healthRecord', healthRecordRouter);

const chiefRouter = require('./routers/chiefs');
app.use('/chief', chiefRouter);

const healthCenterRouter = require('./routers/healthCenters');
app.use('/healthCenter', healthCenterRouter);

const bookRouter = require('./routers/books');
app.use('/book', bookRouter);

const queRouter = require('./routers/queues');
app.use('/que', queRouter);

const testRouter = require('./routers/test');
app.use('/test', testRouter);

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
