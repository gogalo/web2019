var Usuario = require('../models/Usuario');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const SEED = require('../config/config').SEED;

var loginController = {

    // login de usuarios
    login: function(req, res, next) {
        
        // recoger datos del body
        data = req.body;
        // buscar el usuario
        Usuario.findOne({username: data.username}, (err, usuario) => {

            // error en la peticion
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            // No se ha encontrado el usuario con ese username
            if (!usuario) {
                return res.status(400).json({
                    success: false,
                    error: "Credenciales no validas"
                });
            }

            // No coincide la contraseña
            if (!bcrypt.compareSync(data.password, usuario.password)) {
                return res.status(400).json({
                    success: false,
                    error: "Credenciales no validas"
                });
            }

            usuario.password = ";)";

            // generar el token
            var token = jwt.sign(
                {usuario: usuario}, // payload
                SEED, // SEED
                {expiresIn: 14400} // tiempo de expiracion de 4h    
            );

            res.status(200).json({
                success: true,
                data: usuario,
                access_token: token
            });
        

        });

        
    }
};

module.exports = loginController;