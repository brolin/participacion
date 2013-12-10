var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function upperCase(val) {
  return val.toUpperCase();
}

var Cargo = new Schema({
    cargo: { type: String, set: upperCase },
    directivos: { type: String, set: upperCase },
    genero: { type: String, set: upperCase },
    orient_sexual: { type: String, set: upperCase },
    edad: { type: String, set: upperCase },
    etnia: { type: String, set: upperCase },
    remuneracion: { type: String, set: upperCase },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Cargo', Cargo);
