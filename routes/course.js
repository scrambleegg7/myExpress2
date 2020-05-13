var express = require('express');
var router = express.Router();

const { createCourse, getCourse } = require('../controllers/course')


/* GET users listing. */
router.post('/createCourse', createCourse);
router.get('/course', getCourse);


module.exports = router;
