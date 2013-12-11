var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// function upperCase(val) {
//   return val.toUpperCase();
// }

var Cargo = new Schema({
    cargo: { type: String },
    directivos: { type: String },
    genero: { type: String },
    orient_sexual: { type: String },
    edad: { type: String },
    etnia: { type: String },
    remuneracion: { type: String },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Cargo', Cargo);
