
const ListingsAndReviews = require("../models/listings");


exports.listingById = (req, res, next, id) => {


    console.log("* scheme model name --> ", ListingsAndReviews.name)

    //var id_obj = Object
    //ListingsAndReviews.findById(id)

    ListingsAndReviews.findOne({ _id:  id }, (err, listing) => {
        // if err or no user
        if (err || !listing) {
            return res.status(400).json({
                error: 'cannot find listing.' + err
            });
        }
        
        console.log(listing)
        return res.json({ data : listing });

        //return res.json({ token, user: { _id, email, name, role } });
    });



    };



exports.allLists = (req, res) => {
    ListingsAndReviews.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        console.log(users);
        
        res.json(users);
    })
    //.select('name email updated created role');
};

exports.oneList = (req, res) => {
    ListingsAndReviews.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    })
    //.select('name email updated created role');
};

exports.getList = (req, res) => {
    //req.profile.hashed_password = undefined;
    //req.profile.salt = undefined;
    console.log("getListing:",req.profile)
    return res.json(req.profile);
};
