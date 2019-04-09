var SEED = require('../config/config').SEED;
var jwt = require('jsonwebtoken');

exports.verificarToken = function(req, res, next) {
    
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Las cabeceras de Express se convierten a minusculas automaticamente
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Quitar Bearer del string
            token = token.slice(7, token.length);
        }
    
    
        jwt.verify(token, SEED, (err, decoded) => {
            
            if (err) {
                res.status(401).json({
                    success: false,
                    error: err
                });
            }
    
            // Añadir el usuario loqueado al req para tenerlo disponible en todas las rutas privadas.
            req.usuario = decoded.usuario;
            next();
    
        });

    } else {
        res.status(401).json({
            success: false,
            message: 'Auth token no soportado'
        });
    }
    
}