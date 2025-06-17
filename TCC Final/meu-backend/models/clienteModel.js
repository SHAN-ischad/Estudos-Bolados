
const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 3, match: /^[A-Za-zÀ-ÿ\s]+$/ },
  telefone: { type: String, required: true, match: /^[0-9]{10,11}$/ }, // Apenas números, 10 ou 11 dígitos
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Regex para e-mail
  },
  veiculo: { type: String },
  placa: { type: String, match: /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i }, // Exemplo de regex para placa
  idade: { type: Number, min: 18, max: 120 },
  datanasci: { type: Date },
  senha: { type: String, required: true, minlength: 6 },
  cpf: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{11}$/ // 11 dígitos numéricos
  },
  datacadastro: { type: Date, default: Date.now },
  historicocarros: [{ type: String }],
  carros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }],
  telefone: { type: String, required: true, match: /^[0-9]{10,11}$/ }, // Apenas números, 10 ou 11 dígitos
  fotoPerfil: { type: String }, //url foto de perfil
});

module.exports = mongoose.model('Cliente', ClienteSchema);