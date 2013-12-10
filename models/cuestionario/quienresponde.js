var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function upperCase(val) {
  return val.toUpperCase();
}

var Quienresponde = new Schema({
    nombre: { type: String, set: upperCase },
    apellidos: { type: String, set: upperCase },
    cargo: { type: String, set: upperCase },
    telefono: { type: String, set: upperCase },
    correo_electronico: { type: String },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Quienresponde', Quienresponde);
