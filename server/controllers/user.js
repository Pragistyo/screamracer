require('dotenv').config()
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const FB = require('fb');

class LoginController {

    static getData(req,res) {
      user.find({}).then(data=>{
        res.send(data)
      })
    }

    static coba(req,res) {
      res.send('test')
    }

    static testFBAccessToken(req, res, next) {
      // console.log('haha')
      // res.send('ok')
        // console.log('===========', process.env.FBTOKEN);
        FB.setAccessToken(process.env.FBTOKEN);
        // res.send(process.env.FBTOKEN)
        // next()
    }

    static setFBAccessToken(req, res, next) {
      // console.log('haha')
      // res.send('ok')
        // console.log('pppp', process.env.FBTOKEN);
        FB.setAccessToken(process.env.FBTOKEN);
        // res.send(process.env.FBTOKEN)
        next()
    }

    static getUserFBtest(req, res) {
        // res.send('oi')  
      FB.api('/me', {
        access_token: process.env.FBTOKEN,
        fields: ['id,name,email,picture.type(large)']
      }, response => {
          res.send(response)
      })
    }

  static getUserFB(req, res) {
  FB.api('/me', {
    access_token: process.env.FBTOKEN,
      fields: ['id,name,email,picture.type(large)']
  },response => {
    var idnya = response.id
    var namanya = response.name
    var imgnya = response.picture.data.url
    user.findOne({ facebookId: idnya })
      .then(userResult => {
        if (!userResult) {
          user.create({
            name: namanya,//klo pake fb, keisi fbID, klo engga bikin auto increment
            profilePicture: imgnya, //dipake FB name masuk sini
            highScore: 0, //not required if login by fb
            facebookId: idnya //link
          })
      .then(result => {
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        let token = jwt.sign({
          _id: result._id,
          name: result.name,
          facebookId: result.facebookId,                              
          profilePicture: result.imgnya
        }, process.env.FBTOKEN)
        // res.send(token)
        res.send({ thisToken: token, dataFB: result, msg: "token launched" })
      })
          .catch(err => {
              console.log('====================================');
              console.log(err);
              console.log('====================================');
              // res.send(err)
          })
        } else {

          let token = jwt.sign({
          
            _id: userResult._id,
            name: userResult.name,
            facebookId: userResult.facebookId,
            profilePicture: userResult.profilePicture
          }, process.env.FBTOKEN)
            // res.send(token)
            res.send({ thisToken: token, dataFB: userResult, msg: "token launched" })
        }
      })
    })
  }
  static delete (req,res){
    user.findByIdAndRemove(req.params.id,function(err){
      if(!err){
       res.json({ message:'data sudah dihapus'})
      }else{
        res.send(err)
      }
    })
  }    
  static getDatok(req,res){
    var opentoken= jwt.verify(req.headers.token, process.env.FBTOKEN)
      // console.log(opentoken);
      // console.log('==============');
      // console.log(req.headers.token);
    user.findOne({_id: opentoken._id})
    .then(response=>{
      res.send(response.profilePicture)
    })
  }
  static verify (req,res,next){
    jwt.verify(req.headers.token, process.env.FBTOKEN,(err,decoded)=>{
      if(!err){
        res.send(decoded)
        // req.locals = decoded
        // next()
      }else{
        console.log(err);
      }
    })
  }

}

module.exports = LoginController