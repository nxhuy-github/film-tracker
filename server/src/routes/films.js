const express = require('express');
const router = express.Router();
const FilmsController = require('../controller/FilmsController');

router.get('/', FilmsController.index);

router.post('/', FilmsController.post);

router.get('/:filmId', FilmsController.show);

router.put('/:filmId', FilmsController.put);

module.exports = router