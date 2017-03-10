module.exports=function(app,express,path){
//bootstrap, jquery, css, js
// app.use('/bootstrap',express.static(path.join(__dirname,'..','..','node_modules','bootstrap','dist')));
app.use('/jquery',express.static(path.join(__dirname,'..','..','node_modules','jquery','dist')));
// app.use('/css',express.static(path.join(__dirname,'..','..','client','css')));
app.use('/js',express.static(path.join(__dirname,'..','..','client','js')));
//serviamo la index
// app.get('/',function(req,res){
// res.sendFile(path.join(__dirname,'..','..','client','index.html'))
// });
//ROUTERS
var users=require('./../utenti/index.js');
app.use('/users', users);
};
