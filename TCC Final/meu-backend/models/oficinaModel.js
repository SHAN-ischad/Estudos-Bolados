const mongoose = require('mongoose');

const OficinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    match: /^[A-Za-zÀ-ÿ\s]+$/ // Apenas letras e espaços
  },
  endereco: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  telefone: {
    type: String,
    required: true,
    match: /^[0-9]{10,11}$/ // Apenas números, 10 ou 11 dígitos
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Regex para e-mail
  },
  cnpj: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{14}$/ // 14 dígitos numéricos
  },
  proprietario: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    match: /^[A-Za-zÀ-ÿ\s]+$/
  },
  senha: {
    type: String,
    required: true,
    minlength: 6
  },
  dataCadastro: { type: Date, default: Date.now },
  servicosOferecidos: [{ type: String }],
  avaliacao: { type: Number, default: 0, min: 0, max: 5 },

});

module.exports = mongoose.model('Oficina', OficinaSchema);