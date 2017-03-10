
module.exports=function(app,express,path){
//bootstrap, css:client
app.use('/bootstrap',express.static(path.join(__dirname,'..','..','node_modules','bootstrap','dist')));
app.use('/css',express.static(path.join(__dirname,'..','..','client','css')));

//rotta per utenti
app.use('/utenti', require('./../risorse/utenti'));
//rotta per ricette
app.use('/ricette', require('./../risorse/ricette'));

//jquer, js
app.use('/jquery',express.static(path.join(__dirname,'..','..','node_modules','jquery','dist')));
app.use('/js',express.static(path.join(__dirname,'..','..','client','js')));

//serviamo la index
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'..','..','client','index.html'))
});

};
