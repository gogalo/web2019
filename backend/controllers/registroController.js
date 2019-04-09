var Usuario = require('../models/Usuario');
var bcrypt = require('bcrypt');

var registroController = {
  // registro de usuarios
  registrar: function(req, res, next) {

      // datos para el registro
      var usuario = new Usuario(req.body)

      // asignarle el grupo "suscriptor"
      usuario.grupos = ['suscriptor'];

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
                      data: data
                  });
              }
          });
      });
      
  }

}

module.exports = registroController;
