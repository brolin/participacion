var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function upperCase(val) {
  return val.toUpperCase();
}

var Quienresponde = new Schema({
    nombre: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    apellidos: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    cargo: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    telefono: { type: String, set: upperCase, default: 'SIN INFORMACION' },
    correo_electronico: { type: String, default: 'SIN INFORMACION' },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Quienresponde', Quienresponde);
