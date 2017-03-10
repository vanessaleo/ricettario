var mongoose = require('mongoose');
var Ricette = require('./ricette.model.js');

module.exports = (function() {

    var getRicette = function(req, res) {
        Ricette.find().exec().then(function(data) {
            res.status(200).json(data);
        }).catch(function(err) {
            res.status(400).send(err);
        })
    };

    var dettaglioRicette = function(req, res) {
        var id = req.params.id;
        Ricette.findById(id).exec().then(function(data) {
            res.status(200).json(data);
        }).catch(function(err) {
            res.status(400).send(err);
        });
    };

    var findRicette = function(req, res) {
        var ingrediente = req.query.ingrediente;
        var categoria = req.query.categoria;
        Ricette.find({
            $or: [{
                'ingredienti': ingrediente,
                "categoria": categoria
            }]
        }).exec().then(function(data) {
            res.status(200).json(data);
        }).catch(function(err) {
            res.status(400).send(err);
        });
    };

    var createRicette = function(req, res) {
        var newRicetta = new Ricette(req.body);
        newRicetta.save().then(function(data) {
            res.status(200).json(data);
        }).catch(function(err) {
            res.status(400).json(err);
        });
    };

    return {
        getRicette: getRicette,
        createRicette: createRicette,
        dettaglioRicette: dettaglioRicette,
        findRicette: findRicette
    }

})();
