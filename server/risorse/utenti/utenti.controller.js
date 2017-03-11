var Users=require('./utenti.model.js');
var mongoose=require('mongoose');

module.exports=(function(){

var getUsers=function(req,res){
  Users.find().populate('RicettaId').exec().then(function(data){
    res.status(200).json(data);
  }).catch(function(err){
    res.status(400).send(err);
  })
  };
  var detailUsers=function(req,res){
    var id=req.params.id;
    Users.findById(id).populate('RicettaId').exec().then(function(data){
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

    var deleteUsers=function(req,res){
      var id=req.params.id;
      Users.findById(id).remove().then(function(data){
        res.status(200).json(data);
      }).catch(function (err){
        res.status(400).send(err);
      });
    };
    var updateUsers=function(req,res){
        var id=req.params.id;
        var newData=req.body;
        Users.findByIdAndUpdate(id,newData).then(function(data){
          res.status(200).json(data);
        }).catch(function(err){
          res.status(400).send(err);
        });
      };
      var cercaUsers=function(req,res){
        var cerca=req.query.cerca;
    Users.find({
        "username":cerca
    }).exec().then(function (data) {
      res.status(200).json(data);
    }).catch(function (err) {
      res.status(400).send(err);
    });
    }

  return {
    getUsers:getUsers,
    createUsers:createUsers,
    detailUsers:detailUsers,
    deleteUsers:deleteUsers,
    updateUsers:updateUsers,
    cercaUsers:cercaUsers
  }
}) ();
