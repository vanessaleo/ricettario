var Users=require('./utenti.model.js');
var mongoose=require('mongoose');

module.exports=(function(){

var getUsers=function(req,res){
  Users.find().exec().then(function(data){
    res.status(200).json(data);
  }).catch(function(err){
    res.status(400).send(err);
  })
  };
  var detailUsers=function(req,res){
    var id=req.params.id;
    Users.findById(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err){
      res.status(400).send(err);
    });
  };
  
  var createUsers=function(req,res){
var newUsers=new Users(req.body);
newUsers.save().then(function(data){
  res.status(200).json(data);
}).catch(function(err){
  res.status(400).json(err);
});
    };
  return {
    getUsers:getUsers,
    createUsers:createUsers,
    detailUsers:detailUsers,
    // deleteUsers:deleteUsers,
    // updateUsers:updateUsers,
    // cercaUsers:cercaUsers
  }
}) ();
