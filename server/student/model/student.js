/**
 * Created by pjpandey on 9/9/2016.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var studentSchema = new Schema({
    created_date : {
        type : Date,
        default : Date.now
    },
    college : {
        type : Schema.Types.ObjectId,
        ref : 'College',
        required : true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref : 'Department',
        required: true
    },
    fst_name:  {
        type: String,
        required: true,
        trim : true
    },
    lst_name:  {
        type: String,
        required: true,
        trim : true
    },
    city:  {
        type: String,
        required: true,
        trim : true
    },
    state:  {
        type: String,
        required: true,
        trim : true
    },
    country: {
        type: String,
        required: true,
        trim : true
    },
    age : {
        type : Number,
        required : true,
        max : 26,
        min : 18
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
        trim : true
    },
    contact : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        validate : {
            validator : function validateEmail(email){
                return /^[a-zA-Z]+@[a-zA-Z]+\.com$/.test(email);
            },
            message : 'invalid email'
        }
    }
});

studentSchema.path('contact').validate(function valid(contactNum){
    return /^[0-9]{10}$/.test(contactNum);
}, 'contact number not valid');


// the schema is useless so far
// we need to create a model using it
var Student = mongoose.model('Student', studentSchema);

// make this available to our users in our Node applications
module.exports = Student;