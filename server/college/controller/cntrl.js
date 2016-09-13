/**
 * Created by pjpandey on 9/8/2016.
 */

/**
 * Module dependencies.
 */
require('../model/college');

var helper = require('./../../dbUtils/dbHelper')('College', '-name');

module.exports = helper;