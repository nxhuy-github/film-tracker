const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controller/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

router.post('/', AuthenticationControllerPolicy.register, AuthenticationController.register);

module.exports = router;