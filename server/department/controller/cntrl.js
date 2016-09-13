/**
 * Created by pjpandey on 9/8/2016.
 */

/**
 * Module dependencies.
 */
require('../model/department');

var helper = require('./../../dbUtils/dbHelper')('Department', '-name');

module.exports = helper;