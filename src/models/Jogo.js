const mongoose = require('mongoose');

const Jogo = mongoose.model('Jogo', {
  nome: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  nota: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  anoLancamento: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value <= new Date().getFullYear();
      },
      message: 'Ano não pode ser no futuro'
    }
  },
  zerado: {
    type: Boolean,
    default: false
  },
  amigo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Amigo',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = Jogo;