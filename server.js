const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require("body-parser");
const apiRoute = require(path.join(__dirname, '/api-routes/api-route'))

// const apiRoute = require(__dirname + '/api-routes/api-routes');

const app = express();
 /*
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files....
app.use(express.static(__dirname + '/dist/cat-facts'));

app.use('/api', apiRoute);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/cat-facts/index.html'));
});

app.listen(process.env.PORT || 3000);