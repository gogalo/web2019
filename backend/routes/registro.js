var express = require('express');
var router = express.Router();
var controller = require('../controllers/registroController');

// POST Registro
router.post('/', controller.registrar);

module.exports = router;
