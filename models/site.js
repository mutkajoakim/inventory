const mongoose = require('mongoose');


const siteSChema = mongoose.Schema({
    _id : {
        type : String,
        required : true
    },
    address : { type: string, required : true},
    city:    { type: string, required : true },
    country: { type: string, required: true}



});

module.exports = mongoose.model('Site', siteSChema);