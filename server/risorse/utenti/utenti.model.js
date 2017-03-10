var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user con validazione dei dati
var userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Devi inserire username']
    },
    password: {
        type: String,
        required: [true, 'Devi inserire password'],
    },
immagine:{
  type:String
},
RicettaId:{
  type: Schema.Types.ObjectId,
  ref:'Ricette'
}
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
