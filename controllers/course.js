const Course = require('../models/course');


exports.createCourse = (req, res) => {



    const userCourse = new Course({
            course: req.body.course,
            tag: req.body.tag
    });

    userCourse.save()
    .then( result => {
        console.log("** course successfully saved : result --> ",result)

        res.json(result)

    })
    .catch( err => {
        console.log("*** course save error --> ",err)
    })

};


exports.getCourse = (req, res) => {



    Course.find()
    .then( result => {
        console.log("** course successfully retrieved : result --> ",result)

        res.status(200).json(
            {courses: result}
        )



    })
    .catch( err => {
        console.log("*** course save error --> ",err)
    })

}
