let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
var mainURL= "http://localhost:3000/api/v1";
var usuario;

describe('Api RestFul - Usuarios: ',()=>{
    
    it('GET / Devuelve listado de usuarios', (done) => {
        chai.request(mainURL)
        .get('/usuarios')
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
                expect(obj.permisos).to.be.an("Array");
                expect(obj.__v).to.be.an("Number");
            }
            
            done();
        });
    });

    // crear usuario
    it('POST / Nuevo Usuario', (done) => {
        chai.request(mainURL)
        .post('/usuarios')
        .send({
            email: 'tu@email.com',
            password: '123456',
            username: 'username',
            avatar: 'avatar.jpg',
            activo: false,
            clave_activacion: 'tuClaveDeActivacion',
            api_token_key: 'apiTokenKey',
            grupos: ['grupo1','grupo2'],
            permisos: ['permiso1','permiso2']
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
            expect(usuario.clave_activacion).equal('tuClaveDeActivacion');
            
            expect(usuario.api_token_key).to.be.an("String");
            expect(usuario.api_token_key).equal("apiTokenKey");
            
            expect(usuario.grupos).to.be.an("Array");
            expect(usuario.grupos).to.eql(['grupo1','grupo2']);
            
            expect(usuario.permisos).to.be.an("Array");
            expect(usuario.permisos).to.eql(['permiso1','permiso2']);
            
            expect(usuario.__v).to.be.an("Number");
            expect(usuario.__v).equal(0);
            
            done();
        });
    });

    // Modificar usuario
    it('PUT /:id Modificar Usuario', (done) => {
        chai.request(mainURL)
        .put('/usuarios/' + usuario._id.toString())
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
            expect(usuario.clave_activacion).equal('tuClaveDeActivacion');
            
            expect(usuario.api_token_key).to.be.an("String");
            expect(usuario.api_token_key).equal("apiTokenKey");
            
            expect(usuario.grupos).to.be.an("Array");
            expect(usuario.grupos).to.eql(['grupo1','grupo2']);
            
            expect(usuario.permisos).to.be.an("Array");
            expect(usuario.permisos).to.eql(['permiso1','permiso2']);
            
            expect(usuario.__v).to.be.an("Number");
            expect(usuario.__v).equal(0);
            
            done();
        });
    });

    // obtener usuario
    it('DELETE /:id Borrar usuario', (done) => {
        chai.request(mainURL)
        .get('/usuarios/' + usuario._id.toString())
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
            expect(obj.clave_activacion).equal(usuario.clave_activacion);
            
            expect(obj.api_token_key).to.be.an("String");
            expect(obj.api_token_key).equal(usuario.api_token_key);
            
            expect(obj.grupos).to.be.an("Array");
            expect(obj.grupos).to.eql(usuario.grupos);
            
            expect(obj.permisos).to.be.an("Array");
            expect(obj.permisos).to.eql(usuario.permisos);
            
            expect(obj.__v).to.be.an("Number");
            expect(obj.__v).equal(usuario.__v);
            
            done();
        });
    });

    // Borrar usuario
    it('DELETE /:id Borrar usuario', (done) => {
        chai.request(mainURL)
        .delete('/usuarios/' + usuario._id.toString())
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
            expect(obj.clave_activacion).equal(usuario.clave_activacion);
            
            expect(obj.api_token_key).to.be.an("String");
            expect(obj.api_token_key).equal(usuario.api_token_key);
            
            expect(obj.grupos).to.be.an("Array");
            expect(obj.grupos).to.eql(usuario.grupos);
            
            expect(obj.permisos).to.be.an("Array");
            expect(obj.permisos).to.eql(usuario.permisos);
            
            expect(obj.__v).to.be.an("Number");
            expect(obj.__v).equal(usuario.__v);
            
            done();
        });
    });
    
});