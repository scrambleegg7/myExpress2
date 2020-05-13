

const User = require('../models/user');


exports.allUsers = (req, res) => {

    console.log("* scheme model name --> ", User.name)

    User.find((err, users) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    }).select('name email updated created role');
};
