var express = require('express');
var router = express.Router();

const { allUsers } = require('../controllers/user')


/* GET users listing. */
router.get('/users', allUsers);

module.exports = router;
