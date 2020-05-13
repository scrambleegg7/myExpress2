







var express = require('express');
var router = express.Router();

const {  oneList, getList, allLists, listingById } = require('../controllers/listings');



router.get('/alllist',   allLists);
router.get('/onelist',   oneList);

router.get("/listings/:listId", getList);



// any route containing :userId, our app will first execute userByID()
router.param("listId", listingById);



module.exports = router;

