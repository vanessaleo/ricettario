// var Ricette=require('./ricette.model.js');
// var mongoose=require('mongoose');

module.exports=(function(){

var getRicette=function(req,res){
  // Ricette.find().exec().then(function(data){
  //   res.status(200).json(data);
  // }).catch(function(err){
  //   res.status(400).send(err);
  // })
  res.send('le mie ricette');
  };

  var dettaglioRicette=function(req,res){
  var id=req.params.id;
    res.send('dettaglio ricette' +id);
    };

    var createRicette=function(req,res){
      var ricetta=req.body;
  console.log(ricetta);
  var newRicetta=new Ricette(ricetta);
  newRicetta.save().then(function(data){
    res.status(200).send(data);
  }).catch(function(err){
    res.status(400).send(err);
  });
      };

  return {
    getRicette:getRicette,
    createRicette:createRicette,
    dettaglioRicette:dettaglioRicette,
  }

})();
