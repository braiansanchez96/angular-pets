const express = require("express");
const router = express.Router();
const path = require('path');
const apiController = require(path.join(__dirname, '../api-controllers/api-controller'));

router.get('/get-pets', apiController.getPets);

router.post('/add-pet', apiController.addPet);

module.exports = router;