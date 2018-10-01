'use strict';

const express = require('express');

// Custom modules
const config = require('./config');
const routes = require('./routes');
const db = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('client/assets'));
app.use(routes);

app.listen(config.appPort, () => console.log(`App listening on port ${config.appPort}!`));
db.connectToMongo();
