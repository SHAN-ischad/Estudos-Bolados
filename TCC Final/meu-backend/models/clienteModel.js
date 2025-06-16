/*const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  
carros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }],

  nome: { type: String, required: true },
  telefone: { type: String },
  email: { type: String },
  veiculo: { type: String },
  placa: { type: String },
  idade: { type: Number },
  datanasci: { type: Date },
  senha: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  datacadastro: { type: Date, default: Date.now },
  historicocarros: [{ type: String }], 
  
});

module.exports = mongoose.model('Cliente', ClienteSchema);
*/
const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 3,  match: /^[A-Za-zÀ-ÿ\s]+$/ },
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
  fidelidade: { type: Number, default: 0 },
  carros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }]
});

module.exports = mongoose.model('Cliente', ClienteSchema);