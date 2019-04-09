var Usuario = require('../models/Usuario');

var cambiarEstadoController = {

  cambiarEstado: function(req, res, next) {

    var data = req.body;
    var id = data.id;
    var activo =  (data.activar == "true") ? true : false ;

    // buscar usuario por identificador
    Usuario.findOne({_id: id}, (err, usuario) => {

      if (err) {
        res.status(500). json({
            success: false,
            error: err
        });
      }

      // no tenemos usuario
      if (!usuario) {
          res.status(500). json({
              success: false,
              error: err
          });
      }

      // actualizar estado a activo
      if ( usuario.activo != activo ) {
        usuario.activo = activo;
        usuario.save( (err, usuarioActualizado) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                data.password = ";)";
                res.status(200).json({
                    success: true,
                    data: usuarioActualizado
                });
            }
        });
      } else {
        // no es necesario actualizar el usuario
        res.status(200).json({
            success: true,
            data: usuario
        });
      }

    });

  }

}

module.exports = cambiarEstadoController;
