var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user con validazione dei dati
var ricetteSchema = new Schema({
    titolo: {
        type: String,
        required: [true, 'Devi inserire il titolo']
    },
    categoria: {
        type: String,
        enum: ['Antipasti', 'Primi', 'Secondi','Contorni','Dolci'],
        required: [true, 'Devi inserire la categoria']

    },
    immagine: {
        type: String,
        required: [true, 'Devi inserire immagine']
    },
    difficoltà: {
        type: String,
        required: true,
        enum: ['Facile', 'Difficile', 'Medio']
    },
    tempo: {
        type: Number,
        required: true,
        min: 1,
        max: 500
    },
    temperatura: {
        type: Number,
        required: true,
        min: 1,
        max: 500
    },
    descrizione: {
        type: String,
        required: [true, 'Devi inserire la descrizione']
    },
    procedimento: {
        type: String,
        required: [true, 'Devi inserire il procedimento']
    },
    ingredienti: [{
        type: String,
        required: [true, 'Devi inserire gli ingredienti']
    }],
    voto: {
        type: Number,
        required: true,
        min: 1,
        max:5
    },
    commenti: [{
      author: {
        type: Schema.Types.ObjectId,
      ref: 'Users'},
      commento:String
    }]

});

var Ricette = mongoose.model('Ricette', ricetteSchema);
module.exports = Ricette;
