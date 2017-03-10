var express=require('express');
var router=express.Router();
var Ricette= require('./ricette.controller.js');

//rotta per le ricette
router.get('/', Ricette.getRicette);

module.exports=router;
