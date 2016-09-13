/**
 * Created by pjpandey on 9/9/2016.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var collegeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique : true,
        trim: true
    },
    created_date : {
        type : Date,
        default : Date.now
    },
    contact: {
        type: Number
    },
    city : {
        type: String,
        required: true,
        trim: true
    },
    state : {
        type: String,
        required: true,
        trim: true
    },
    country : {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    }
});

collegeSchema.path('email').validate(function validateEmail(email){
    return /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(email);
}, 'invalid email');

collegeSchema.path('contact').validate(function valid(contactNum){
    return /^[0-9]{10}$/.test(contactNum);
}, 'contact number not valid');

mongoose.model('College', collegeSchema);