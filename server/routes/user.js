require('dotenv').config();
const express = require('express');
const router = express.Router();
// const jwt = require('../helpers/juwita');
const user = require('../controllers/user');


router.get('/fb', user.getUserFB)

router.get('/test/token', user.testFBAccessToken)

router.get('/coba', user.setFBAccessToken)

router.get('/test/fb',user.getUserFBtest)

router.get('/',user.getData)

router.get('/datok/:id',user.getDatok)

router.delete('/:id', user.delete)

router.get('/verify',user.verify)


module.exports = router