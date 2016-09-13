/**
 * Created by pjpandey on 9/8/2016.
 */
var cntrl = require('../controller/cntrl');


module.exports =  function(app) {
    app.route('/api/student')
        .get(cntrl.all)
        .post(cntrl.create);
    app.route('/api/student/:studentId')
        .get(cntrl.read)
        .put(cntrl.update)
        .delete(cntrl.delete);
};