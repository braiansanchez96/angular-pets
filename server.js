const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const apiRoute = require(path.join(__dirname, '/api-routes/api-route'));

const pool = require(path.join(__dirname, '/db-config/db'));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/cat-facts'));

app.use('/api', apiRoute);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/cat-facts/index.html'));
});

app.listen(process.env.PORT || 3000);