/**
 * Created by pjpandey on 9/8/2016.
 */

/**
 * Module dependencies.
 */
require('../model/student');

var helper = require('./../../dbUtils/dbHelper')('Student', '-name');

module.exports = helper;