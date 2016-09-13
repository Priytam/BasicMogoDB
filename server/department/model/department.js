/**
 * Created by pjpandey on 9/9/2016.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var departmentSchema = new Schema({
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
    course: {
        type: Array,
        required: true
    }
});

mongoose.model('Department', departmentSchema);