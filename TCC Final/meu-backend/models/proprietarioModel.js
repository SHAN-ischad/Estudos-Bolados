// models/proprietarioModel.js
const mongoose = require('mongoose');

const ProprietarioSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    nomeOficina: String,
    cnpj: String,
    endereco: String,
    cidadeOficina: String,
    horarioFuncionamento: String,
    descricaoOficina: String,
    // outros campos exclusivos de proprietário
});

module.exports = mongoose.model('Proprietario', ProprietarioSchema);