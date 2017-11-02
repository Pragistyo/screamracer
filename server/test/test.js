const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app');
require('dotenv').config()


chai.use(chaiHttp)

const loginFB = {
    fb_access_token: process.env.TOKENFB
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