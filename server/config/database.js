//connessione al DB
module.exports=function(mongoose){
mongoose.connect('mongodb://admin:admin@ds127190.mlab.com:27190/ricettario', function(err){
  if(err){
    console.log(err);
  }else{
    console.log('database connesso');
  }
});
};
