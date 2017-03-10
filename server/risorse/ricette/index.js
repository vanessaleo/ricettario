var express = require('express');
var router = express.Router();
var Ricette= require('./ricette.controller.js');

//rotta per le ricette
router.get('/', Ricette.getRicette);

router.get('/:id([0-9a-f]{24})', Ricette.dettaglioRicette);

router.put('/:id([0-9a-f]{24})', Ricette.votoRicetta);

router.put('/commento/:id([0-9a-f]{24})', Ricette.commentoRicetta);

router.get('/cerca', Ricette.findRicette);

router.get('/ricerca', Ricette.findCategoriaRicette);

router.delete('/:id([0-9a-f]{24})', Ricette.deleteRicetta);

router.post('/', Ricette.createRicette);

module.exports=router;
