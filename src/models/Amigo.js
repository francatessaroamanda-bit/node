const mongoose = require('mongoose');

const Amigo = mongoose.model('Amigo', {
  nome: String,
  sobrenome: String,
  idade: Number
});

module.exports = Amigo;