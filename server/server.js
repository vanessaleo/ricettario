var express=require('express');
var app=express();
var path=require('path');
const PORT= 3003;
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
//parser nel body
app.use(bodyparser.json());

//connessione al db
require('./config/database.js')(mongoose);
//rotte principali
require('./routes/rotte.js')(app,express,path);

//start del server
app.listen(PORT, function(err){
  console.log('server connesso su http://localhost:' + PORT)
})
