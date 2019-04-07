let chai = require('chai');
let chaiHttp = require('chai-http');
var Buffer = require('safer-buffer').Buffer;

chai.use(chaiHttp);
const expect = chai.expect;
var mainURL = "http://localhost:3000/api/v1";
var loginURL = "http://localhost:3000/api/v1/login";
var usuario;
var token;

describe('Api RestFul - Usuarios: ',()=>{
    
    it('/usuarios debería tener autenticacion', (done) => {
        chai.request(mainURL)
        .get('/usuarios')
        .end(function(err, res) {
            expect(res).to.have.status(401);
            done();
        });
    });

    it('POST /login Debería poder identificarse', (done) => {
        chai.request(mainURL)
        .post('/login')
        .send({
            username: 'gogalo',
            password: '123456'
        })
        .end( (err, res ) => {
            expect(res).to.have.status(200);
            token = res.body.access_token;
            done();
        });
    });

    it('GET / Devuelve listado de usuarios', (done) => {
        chai.request(mainURL)
        .get('/usuarios')
        .set('Authorization', 'Bearer ' + token)
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            var data = res.body.data;
            expect(data).to.be.an('Array');
            for (let obj of data) {
                //console.log(p);
                expect(obj).to.be.an('Object');
                expect(obj._id).to.be.an("String");
                expect(obj.email).to.be.an("String");
                expect(obj.password).to.be.an("String");
                expect(obj.username).to.be.an("String");
                expect(obj.avatar).to.be.an("String");
                expect(obj.activo).to.be.an("Boolean");
                expect(obj.clave_activacion).to.be.an("String");
                expect(obj.api_token_key).to.be.an("String");
                expect(obj.grupos).to.be.an("Array");
                expect(obj.__v).to.be.an("Number");
            }
            
            done();
        });
    });

    // crear usuario
    it('POST / Nuevo Usuario', (done) => {
        chai.request(mainURL)
        .post('/usuarios')
        .set('Authorization', 'Bearer ' + token)
        .send({
            email: 'tu@email.com',
            password: '123456',
            username: 'username',
            avatar: 'avatar.jpg',
            activo: false,
            api_token_key: 'apiTokenKey',
            grupos: ['grupo1','grupo2']
        })
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            usuario = res.body.data;
            expect(usuario).to.be.an('Object');
            
            expect(usuario._id).to.be.an("String");
            
            expect(usuario.email).to.be.an("String");
            expect(usuario.email).equal("tu@email.com");
            
            expect(usuario.username).to.be.an("String");
            expect(usuario.username).equal("username");
            
            expect(usuario.password).to.be.an("String");
            expect(usuario.password).equal(";)");
            
            expect(usuario.avatar).to.be.an("String");
            expect(usuario.avatar).equal("avatar.jpg");
            
            expect(usuario.activo).to.be.an("Boolean");
            expect(usuario.activo).equal(false);
            
            expect(usuario.clave_activacion).to.be.an("String");
            // decodificar la clave de activacion
            const b = Buffer.from(usuario.clave_activacion, 'base64');
            expect(b.toString()).to.equal(usuario._id);

            
            expect(usuario.api_token_key).to.be.an("String");
            expect(usuario.api_token_key).equal("apiTokenKey");
            
            expect(usuario.grupos).to.be.an("Array");
            expect(usuario.grupos).to.eql(['grupo1','grupo2']);
            
            expect(usuario.__v).to.be.an("Number");
            expect(usuario.__v).equal(0);
            
            done();
        });
    });

    // Modificar usuario
    it('PUT /:id Modificar Usuario', (done) => {
        chai.request(mainURL)
        .put('/usuarios/' + usuario._id.toString())
        .set('Authorization', 'Bearer ' + token)
        .send({
            email: 'editado@email.com',
        })
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            usuario = res.body.data;
            expect(usuario.email).to.be.an("String");
            expect(usuario.email).equal("editado@email.com");
            
            expect(usuario.username).to.be.an("String");
            expect(usuario.username).equal("username");
            
            expect(usuario.password).to.be.an("String");
            expect(usuario.password).equal(";)");
            
            expect(usuario.avatar).to.be.an("String");
            expect(usuario.avatar).equal("avatar.jpg");
            
            expect(usuario.activo).to.be.an("Boolean");
            expect(usuario.activo).equal(false);
            
            expect(usuario.clave_activacion).to.be.an("String");
            // decodificar la clave de activacion
            const b = Buffer.from(usuario.clave_activacion, 'base64');
            expect(b.toString()).to.equal(usuario._id);

            expect(usuario.api_token_key).to.be.an("String");
            expect(usuario.api_token_key).equal("apiTokenKey");
            
            expect(usuario.grupos).to.be.an("Array");
            expect(usuario.grupos).to.eql(['grupo1','grupo2']);
            
            expect(usuario.__v).to.be.an("Number");
            expect(usuario.__v).equal(0);
            
            done();
        });
    });

    // obtener usuario
    it('GET /:id Borrar usuario', (done) => {
        chai.request(mainURL)
        .get('/usuarios/' + usuario._id.toString())
        .set('Authorization', 'Bearer ' + token)
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            var obj = res.body.data;
            expect(obj).to.be.an('Object');
            
            expect(obj._id).to.be.an("String");
            expect(obj._id).equal(usuario._id);
            
            expect(obj.email).to.be.an("String");
            expect(obj.email).equal(usuario.email);
            
            expect(obj.username).to.be.an("String");
            expect(obj.username).equal(usuario.username);
            
            expect(obj.password).to.be.an("String");
            expect(obj.password).equal(";)");
            
            expect(obj.avatar).to.be.an("String");
            expect(obj.avatar).equal(usuario.avatar);
            
            expect(obj.activo).to.be.an("Boolean");
            expect(obj.activo).equal(usuario.activo);
            
            expect(obj.clave_activacion).to.be.an("String");
            // decodificar la clave de activacion
            const b = Buffer.from(obj.clave_activacion, 'base64');
            expect(b.toString()).to.equal(usuario._id);
            
            expect(obj.api_token_key).to.be.an("String");
            expect(obj.api_token_key).equal(usuario.api_token_key);
            
            expect(obj.grupos).to.be.an("Array");
            expect(obj.grupos).to.eql(usuario.grupos);
            
            expect(obj.__v).to.be.an("Number");
            expect(obj.__v).equal(usuario.__v);
            
            done();
        });
    });

    // Borrar usuario
    it('DELETE /:id Borrar usuario', (done) => {
        chai.request(mainURL)
        .delete('/usuarios/' + usuario._id.toString())
        .set('Authorization', 'Bearer ' + token)
        .end( function(err,res){
            // tenemos un codigo de respuesta 200
            expect(res).to.have.status(200);
            
            // devuelve un objeto
            expect(res.body).to.be.an('Object');
            
            // success
            var success = res.body.success;
            expect(success).to.equal(true);
            
            // data
            var obj = res.body.data;
            expect(obj).to.be.an('Object');
            
            expect(obj._id).to.be.an("String");
            expect(obj._id).equal(usuario._id);
            
            expect(obj.email).to.be.an("String");
            expect(obj.email).equal(usuario.email);
            
            expect(obj.username).to.be.an("String");
            expect(obj.username).equal(usuario.username);
            
            expect(obj.password).to.be.an("String");
            expect(obj.password).equal(";)");
            
            expect(obj.avatar).to.be.an("String");
            expect(obj.avatar).equal(usuario.avatar);
            
            expect(obj.activo).to.be.an("Boolean");
            expect(obj.activo).equal(usuario.activo);
            
            expect(obj.clave_activacion).to.be.an("String");
            // decodificar la clave de activacion
            const b = Buffer.from(obj.clave_activacion, 'base64');
            expect(b.toString()).to.equal(usuario._id);
            
            expect(obj.api_token_key).to.be.an("String");
            expect(obj.api_token_key).equal(usuario.api_token_key);
            
            expect(obj.grupos).to.be.an("Array");
            expect(obj.grupos).to.eql(usuario.grupos);
            
            expect(obj.__v).to.be.an("Number");
            expect(obj.__v).equal(usuario.__v);
            
            done();
        });
    });
    
});
