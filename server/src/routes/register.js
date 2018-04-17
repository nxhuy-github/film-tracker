const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controller/AuthenticationController')

router.post('/', AuthenticationController.register);

module.exports = router;