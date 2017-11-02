const express = require('express');
const router = express.Router();
// const jwt = require('../helpers/juwita');
const user = require('../controllers/user');

router.get('/test/fb', user.setFBAccessToken, user.getUserFBtest)
router.get('/fb', user.setFBAccessToken, user.getUserFB)





module.exports = router