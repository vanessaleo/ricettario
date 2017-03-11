var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user con validazione dei dati
var userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Devi inserire username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Devi inserire password'],
    },
immagine:{
  type:String,
  default: 'http://www.premiumdxb.com/assets/img/avatar/default-avatar.jpg'

},
categoriaInteresse:[{
  type:String,
  enum: ['Antipasti', 'Primi', 'Secondi','Contorni', 'Dolci'],
  required: [true, 'Devi inserire categoria'],

}],
ricettaId:[{
  type: Schema.Types.ObjectId,
  ref:'Ricette'
}]
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
