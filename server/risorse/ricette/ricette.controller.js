var Ricette=require('./ricette.model.js');
var mongoose=require('mongoose');

module.exports=(function(){

var getRicette=function(req,res){
  Ricette.find().exec().then(function(data){
    res.status(200).json(data);
  }).catch(function(err){
    res.status(400).send(err);
  })
  };

  return {
    getRicette:getRicette,
    // createUsers:createUsers,
    // detailUsers:detailUsers,
    // deleteUsers:deleteUsers,
    // updateUsers:updateUsers,
    // cercaUsers:cercaUsers
  }

}) ();
