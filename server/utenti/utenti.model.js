var mongoose = require('mongoose');
var ricettaSchema = mongoose.Schema;

//user con validazione dei dati
// var ricettaSchema = new Schema({
//     titolo: {
//         type: String,
//         required: [true, 'Devi inserire il nome']
//     },
//     categoria: {
//         type: String,
//         required: [true, 'Devi inserire il cognome'],
//         unique: [true, 'cognome già esistente']
//     },
//     difficoltà: {
//         type: String,
//         required: [true, 'Devi inserire il sesso']
//     },
//     tempo: {
//         type: Number,
//         required: true,
//         min: [18, 'Devi essere maggiorenne'],
//         max: 100
//     },
//cottura: {
//         type: Number,
//         required: true,
//         min: [18, 'Devi essere maggiorenne'],
//         max: 100
//     },
//costo: {
//         type: Number,
//         required: true,
//         min: [18, 'Devi essere maggiorenne'],
//         max: 100
//     },
//descrizione: {
//         type: Number,
//         required: true,
//         min: [18, 'Devi essere maggiorenne'],
//         max: 100
//     },
//ingredienti: {
//         type: Number,
//         required: true,
//         min: [18, 'Devi essere maggiorenne'],
//         max: 100
//     },


// });




var User = mongoose.model('User', userSchema);
module.exports = User;
