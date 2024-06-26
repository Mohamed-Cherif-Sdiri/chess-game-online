const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion MongoDB :'));
db.once('open', () => {
    console.log('Connecté à MongoDB en local !');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes');
app.use('/', routes);

app.listen(5000, () => {
    console.log('server en marche');
});
