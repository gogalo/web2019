let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
var mainURL= "http://localhost:3000";

describe('Página principal: ',()=>{
    
    it('GET / Devuelve un código 200', (done) => {
        chai.request(mainURL)
        .get('/')
        .end( function(err,res){
            expect(res).to.have.status(200);
            done();
        });
    });
    
    it('GET / Devuelve HTML concreto', (done) => {
        chai.request(mainURL)
        .get('/')
        .end( function(err,res){
            expect(res.text).equals('<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Express</h1><p>Welcome to Express</p></body></html>');
            done();
        });
    });
});