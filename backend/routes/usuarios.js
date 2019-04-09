var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuariosController');
var mdAuth = require('../middelwares/autenticacion');

//router.get('/test-password', controller.testPassword);

// GET Listado de usuarios
router.get('/', mdAuth.verificarToken, controller.list);

// GET Obtener un usuario por id
router.get('/:id', mdAuth.verificarToken, controller.get);

// POST nuevo usuario
router.post('/', mdAuth.verificarToken ,controller.create);

// PUT Modificar un usuario
router.put('/:id', mdAuth.verificarToken, controller.update);

// DELETE Borrar un usuario
router.delete('/:id', mdAuth.verificarToken, controller.delete);

module.exports = router;
