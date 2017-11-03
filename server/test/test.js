require('dotenv').config()
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app');
const jwt = require('jsonwebtoken')

chai.use(chaiHttp)

const loginFB = {
    fb_access_token: process.env.FBTOKEN
}


describe('test GET fb data', () => {
    it('should be GET data user fb', (done) => {
        // console.log(newArticle);
        chai.request(app)
            .get('/user/test/fb')
            .send(loginFB)
            .end((err, response) => {
                // console.log(response);
                // params = response.body._id
                // date = response.body.created_at
                // console.log('=============='+date);
                response.status.should.be.equal(200)
                response.body.should.be.an('object') 
                response.body.should.have.property('id')
                response.body.should.have.property('name')
                response.body.should.have.property('picture')
                // response.body.title.should.equal('Testing TDD')
                // response.body.content.should.equal('content TDD')
                // response.body.author.should.equal('dimsum')
                done()
            })
    })
})

describe('test GET fb data', function()  {
  it('should be GET data user fb', function (done)  {
      // console.log(newArticle);
    chai.request(app)
      .get('/')
      .send(loginFB)
      .end((err, response) => {
        response.status.should.equal(200)
        response.body.should.be.an('array')
        response.body.should.have.property('id')
        // response.body.should.have.property('name')
        // response.body.should.have.property('picture')
        // response.body.id.should.equal('10209912860992305')
        // response.body.name.should.equal('Chandra Buwana')
        // response.body.author.should.equal('dimsum')
        // .then(()=>done())
        done()
      })
    })
})

// describe('test FB access token',()=>{
//   it('Shoul be get FB Access token',(done)=>{
//     chai.request(app)
//     .get('/coba')
//     .send(loginFB)
//     .end((err,response)=>{
//       response.status.should.equal(200)
//       // response.should.have.property('FB.setAccessToken')
//       done()
//     })
//   })
// })

// describe('test fb access token',()=>{
//   it('should be get Fb access token',(done)=>{
//     chai.request(app)
//     .get('/test/token')
//     .send(loginFB)
//     .end((err,response)=>{
//       response.status.should.equal(200)
//       done()
//     })
//   })
// })

describe('test Verify data User',function (){
  it('should be get data User from token',function(done){
    chai.request(app)
    .get('/verify')
    .send(loginFB)
    .end(function(err,response){
      response.status.should.equal(200)
      
      done()
    })
  })
})

