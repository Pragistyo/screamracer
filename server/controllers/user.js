require('dotenv').config()
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const FB = require('fb');

class LoginController {
    constructor() {

    }

    static setFBAccessToken(req, res, next) {
        console.log('===========', req.headers.fb_access_token);
        FB.setAccessToken(req.headers.fb_access_token);
        next()
    }

    static getUserFBtest(req, res) {
        FB.api('/me', {
            fields: ['id,name,email,picture.type(large)'], access_token: fb_access_token
        }, response => {
            res.send(response)
        })
    }

    static getUserFB(req, res) {
        // FB.api('/me', {
        //     fields: ['id,name,email,picture.type(large)']
        // }, response => {
        //     console.log(response);
        //     var idnya = response.id
        //     var namanya = response.name
        //     var emailnya = response.email
        //     var imgnya = response.picture.data.url

        //     user.findOne({ userId: idnya })
        //         .then(userResult => {

        //             if (!userResult) {
        //                 user.create({
        //                     userId: idnya,//klo pake fb, keisi fbID, klo engga bikin auto increment
        //                     username: namanya, //dipake FB name masuk sini
        //                     password: '', //not required if login by fb
        //                     img: imgnya, //link
        //                     email: emailnya
        //                 })
        //                     .then(result => {
        //                         console.log('====================================');
        //                         console.log(result);
        //                         console.log('====================================');
        //                         let token = jwt.sign({
        //                             _id: result._id,
        //                             userId: result.userId,
        //                             username: result.usernmae,
        //                             email: result.email,
        //                             img: result.img
        //                         }, process.env.SECRET_KEY)
        //                         // res.send(token)
        //                         res.send({ thisToken: token, dataFB: result, msg: "token launched" })
        //                     })
        //                     .catch(err => {
        //                         console.log('====================================');
        //                         console.log(err);
        //                         console.log('====================================');
        //                         // res.send(err)
        //                     })
        //             } else {
        //                 let token = jwt.sign({
        //                     _id: userResult._id,
        //                     userId: userResult.userId,
        //                     username: userResult.username,
        //                     email: userResult.email,
        //                     img: userResult.img
        //                 }, process.env.SECRET_KEY)
        //                 // res.send(token)
        //                 res.send({ thisToken: token, dataFB: userResult, msg: "token launched" })
        //             }
        //         })
        // })
    }
}

module.exports = LoginController