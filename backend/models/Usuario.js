var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-cms', { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification ofconnection errors)
db.on('error', console.error.bind(
    console, 'MongoDB connection error:'
));

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema(
    {
        email: String,
        password: String,
        username: String,
        avatar: String,
        activo: Boolean,
        clave_activacion: String,
        api_token_key: String,
        grupos: Array,
        permisos: Array
    },
    { 
        timestamps: { 
            createdAt: 'fecha_creacion',
            updatedAt: 'fecha_modificacion'
        }
    }
);

var Usuario = mongoose.model('usuarios', UsuarioSchema );

module.exports = Usuario;


