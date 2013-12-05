var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Quienresponde = new Schema({
    nombre: { type: String },
    apellidos: { type: String },
    cargo: { type: String },
    telefono: { type: String },
    correo_electronico: { type: String },
    cuestionario_id: { type: String, index: true }
});

module.exports = mongoose.model('Quienresponde', Quienresponde);