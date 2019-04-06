var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Buffer = require('safer-buffer').Buffer;

// connect
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
        email: { type: String, required: [true, 'El email es necesario.'] },
        password: { type: String, required: [true, 'La contraseña es necesario.'] },
        username: { type: String, unique: true, required: [true, 'El usuario es necesario.'] },
        avatar: String,
        activo: { type: Boolean, default: false },
        clave_activacion: { type: String, default: '' },
        api_token_key: { type: String, required: false, default: '' },
        grupos: { type: Array, required: [true, 'El usuario tiene que tener grupo'] }
    },
    { 
        timestamps: { 
            createdAt: 'fecha_creacion',
            updatedAt: 'fecha_modificacion'
        }
    }
);

// validacion campos unicos
UsuarioSchema.plugin(uniqueValidator, { message: "El {PATH} tiene que ser único"});

// PreSave: actualizar valores automaticamente antes de una insercion
UsuarioSchema.pre('save', function (next) {
    
    // codificar en base 64 en node.js, https://nodejs.org/es/docs/guides/buffer-constructor-deprecation/
    const b = Buffer.from(this._id.toString());
    this.clave_activacion = b.toString('base64');
    
    // decodificar en base 64 en node.js
    // const b2 = Buffer.from(this.clave_activacion, 'base64');
    // console.log('decoded: ', b2.toString());
    
    next();
});

var Usuario = mongoose.model('usuarios', UsuarioSchema );

module.exports = Usuario;


