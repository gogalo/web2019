var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuariosController');


// GET Listado de usuarios 
router.get('/', controller.list);

// POST nuevo usuario 
router.post('/', controller.create);

// GET Obtener un usuario por id 
router.get('/:id', controller.get);

// PUT Modificar un usuario 
router.put('/:id', controller.update);

// DELETE Borrar un usuario 
router.delete('/:id', controller.delete);

module.exports = router;
