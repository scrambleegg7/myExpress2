const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const listingsScheme = new mongoose.Schema(
    {
        _id: String,

        listing_url: {
            type: String,
        },

        name: {
            type: String,
        },
        summary: {
            type: String,
        },
        description: {
            type: String,
        },
    }

);

//console.log(listingsScheme.name);


module.exports = mongoose.model("listingsAndReviews", listingsScheme)