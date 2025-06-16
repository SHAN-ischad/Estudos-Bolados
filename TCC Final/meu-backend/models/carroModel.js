const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  modelo: { 
    type: String, 
    required: true, 
    minlength: 2, 
    maxlength: 50 
  },
  placa: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i // Exemplo de regex para placa brasileira
  },
  ano: { 
    type: Number, 
    min: 1900, 
    max: new Date().getFullYear() + 1 // Aceita até o ano seguinte ao atual
  },
  cor: { 
    type: String, 
    minlength: 3, 
    maxlength: 30 
  },
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cliente', 
    required: true 
  }
});

module.exports = mongoose.model('Carro', CarroSchema);