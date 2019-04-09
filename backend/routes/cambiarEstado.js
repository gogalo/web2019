var express = require('express');
var router = express.Router();
var controller = require('../controllers/cambiarEstadoController');

// PUT activar usuario
router.put('/', controller.cambiarEstado);

// PUT desactivar usuario
//router.put('/desactivar', controller.desactivar);

module.exports = router;
