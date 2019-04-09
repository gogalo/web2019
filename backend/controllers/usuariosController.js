var Usuario = require('../models/Usuario');
var bcrypt = require('bcrypt');

var usuariosController = {

    // listado de usuarios
    list: function(req, res, next) {

        // filtros iniciales
        var query = {};

        // comprobar si tenemos que filtrar por "activo"
        if(typeof req.query.activo != 'undefined') {
          query.activo = req.query.activo;
        }

        Usuario.find(query, function (err, data) {

            if (err!=null) {
                res.json({
                    success: false,
                    error: err
                });
            } else {

                var data = data.map(function (usuario) {
                    usuario.password = ";)";
                    return usuario;
                });


                res.json({
                    success: true,
                    data: data,
                    usuarioAuth: req.usuario
                });
            }
            
        });
    },
    // nuevo usuario
    create: function(req, res, next) {
        var usuario = new Usuario(req.body);

        // codificar la contraseña del usuario (plainPasssword, saltRounds)
        bcrypt.hash(usuario.password, 10).then(function(hash) {
            usuario.password = hash;
            usuario.save(function(err, data) {
                if (err!=null) {
                    res.json({
                        success: false,
                        error: err
                    });
                } else {
                    data.password = ";)";
                    res.json({
                        success: true,
                        data: data,
                        usuarioAuth: req.usuario
                    });
                }
            });
        });
    },
    // obtener un usuario
    get: function(req, res, next) {
        var id = req.params.id
        Usuario.findOne({_id: id}, function(err, data) {
            if (err!=null) {
                 res.json({
                    success: false,
                    error: err
                });
            } else {
                data.password = ";)";
                res.json({
                    success: true,
                    data: data,
                    usuarioAuth: req.usuario
                });
            }
        });

    },
    // actualizar un usuario
    update: function(req, res, next) {
        var id = req.params.id;
        Usuario.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, data) {
            if (err!=null) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                data.password = ";)";
                res.json({
                    success: true,
                    data: data,
                    usuarioAuth: req.usuario
                });
            }
        });

    },
    // borrar un usuario
    delete: function(req, res, next) {
        var id = req.params.id;
        Usuario.findOneAndRemove({_id: id}, function(err, data) {
            if (err!=null) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                data.password = ";)";
                res.json({
                    success: true,
                    data: data,
                    usuarioAuth: req.usuario
                });
            }
        });
    },
    testPassword: function(req, res, next) {
      bcrypt.hash('123456', 10).then(function(hash) {
          res.json({
            hash: hash
          })
      });
    }
};

module.exports = usuariosController;
