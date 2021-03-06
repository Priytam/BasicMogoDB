/**
 * Created by pjpandey on 9/9/2016.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errorsController'),
    _ = require('lodash');

module.exports = function(modelName, sortBy) {

    var Model = mongoose.model(modelName);

    return  {
        create : create,
        read : read ,
        update : update ,
        delete : destroy,
        all : all,
        getByID : getByID
    };

    function create (req, res) {
        var model = new Model(req.body);
        console.log(req.body);
        model.save(function(err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.status(201).json(model);
            }
        });
    }

    function read(req, res) {
        res.json(req.modelName);
    }

    function update (req, res) {
        var model = req.modelName;
        model = _.extend(model, req.body);
        model.save(function(err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(model);
            }
        });
    }

    function destroy(req, res) {
        var model = req.modelName;

        model.remove(function(err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(model);
            }
        });
    }

    function all(req, res) {
        var query = {};
        if (req.query) {
            query = req.query;
        }
        Model.find(query).sort(sortBy).exec(function(err, models) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(models);
            }
        });
    }

    function getByID(req, res, next, id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({
                message: modelName + ' is invalid'
            });
        }

        Model.findById(id).exec(function(err, model) {
            if (err) return next(err);
            if (!model) {
                return res.status(404).send({
                    message: modelName + ' not found'
                });
            }
            req.modelName = model;
            next();
        });
    }
};