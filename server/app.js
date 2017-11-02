'use strict'

require('dotenv').config();

const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const mongoose   = require('mongoose');
const app        = express();

mongoose.connect('mongodb://ogitamvan:I95i994!@cluster0-shard-00-00-tptia.mongodb.net:27017,cluster0-shard-00-01-tptia.mongodb.net:27017,cluster0-shard-00-02-tptia.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
    // mongoose.connect('mongodb://admin:123@cluster0-shard-00-00-jgxqq.mongodb.net:27017,cluster0-shard-00-01-jgxqq.mongodb.net:27017,cluster0-shard-00-02-jgxqq.mongodb.net:27017/bedekan?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',(err)=>{
    if (!err) {
        console.log('CONNECTED mongoose');
    } else {
        console.log('NOT CONNECT mongoose ', err);
    }
})


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const user = require('./routes/user');

const port = process.env.PORT || 3000;
app.listen(port, console.log(`screamracer server listening on port ${port}`));