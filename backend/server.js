const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://taoaa1:notpassword@cluster0.sztq6.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
const UserRoute = require('./routes/authRoutes');
const TweetsRoute = require('./routes/TweetsRoutes');

const cors = require('cors');
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database Estabished!');
});

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors()) // Use this after the variable declaration

app.use(morgan('dev'));

// Add the following middleware to parse request bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api', UserRoute);
app.use('/api/tweets',TweetsRoute)
