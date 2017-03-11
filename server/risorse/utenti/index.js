var express=require('express');
var router=express.Router();
var Users= require('./utenti.controller.js');

//lista utenti
router.get('/',Users.getUsers);
// //creazione utente
router.post('/',Users.createUsers);
// //dettaglio utente
router.get('/id/:id([0-9a-f]{24})',Users.detailUsers);
//elimina utente
router.delete('/id/:id([0-9a-f]{24})',Users.deleteUsers);
//aggiorna utente
router.put('/aggiorna/:id([0-9a-f]{24})',Users.updateUsers);
//ricerca
router.get('/cerca/', Users.cercaUsers);

module.exports=router;
