var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function upperCase(val) {
  return val.toUpperCase();
}

var Cargo = new Schema({
    cargo: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    directivos: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    genero: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    orient_sexual: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    edad: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    etnia: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    remuneracion: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Cargo', Cargo);
