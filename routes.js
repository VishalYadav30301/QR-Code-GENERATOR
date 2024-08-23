//routes.js

const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/generate-qr', controller.generateQR);

module.exports = router;

