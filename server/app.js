'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const cors = require('cors');

mongoose.connect('mongodb://chandrabuwana:chandrabuwana92@cluster0-shard-00-00-kk9ld.mongodb.net:27017,cluster0-shard-00-01-kk9ld.mongodb.net:27017,cluster0-shard-00-02-kk9ld.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
    if (!err) {
        console.log('CONNECTED mongoose');
    } else {
        console.log('NOT CONNECT mongoose ', err);
    }
})


app.use(cors());

const user = require('./routes/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',user)
const port = process.env.PORT || 3000;
app.listen(port, console.log(`screamracer server listening on port ${port}`));

module.exports = app;