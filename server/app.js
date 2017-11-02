'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://admin:123@cluster0-shard-00-00-jgxqq.mongodb.net:27017,cluster0-shard-00-01-jgxqq.mongodb.net:27017,cluster0-shard-00-02-jgxqq.mongodb.net:27017/bedekan?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
    if (!err) {
        console.log('CONNECTED mongoose');
    } else {
        console.log('NOT CONNECT mongoose ', err);
    }
})

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
app.listen(port, console.log(`screamracer server listening on port ${port}`));