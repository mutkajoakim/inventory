const mongoose = require('mongoose');
const opts = { toJSON : {virtuals : true}};

const inventSChema = mongoose.Schema({
    _id : {
        type : String,
        required : true
    },
    location0 : {
        type : Number,
        required : true
    },
    location1 : {
        type : Number,
        required : true
    },
    location2 : {
        type : Number,
        required : true
    }}, opts);

inventSChema.virtual('totalstock').get( function() {
        return this.location0 + this.location1 + this.location2
});