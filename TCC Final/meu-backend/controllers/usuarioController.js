const Usuario = require('../models/usuarioModel');
const Cliente = require('../models/clienteModel');
const Carro = require('../models/carroModel');
const Proprietario = require('../models/proprietarioModel');
const bcrypt = require('bcrypt');

const criarUsuario = async (req, res) => {
    console.log('Recebido no backend:', req.body); // <-- Adicione esta linha
    try {
        const { senha, email, tipoConta, ...resto } = req.body;

        // Cria usuário
        const senhaHash = await bcrypt.hash(senha, 10);
        const usuario = new Usuario({ email, senha: senhaHash, tipoConta, ...resto });
        const usuarioSalvo = await usuario.save();

        if (tipoConta === 'cliente') {
            // Cria cliente
            const cliente = new Cliente({
                usuario: usuarioSalvo._id,
                cpf: resto.cpf,
                dataNascimento: resto.dataNascimento,
                idade: resto.idade,
                cidade: resto.cidade,
                estado: resto.estado,
                clientImage: resto.clientImage,
                // outros campos de cliente
            });
            const clienteSalvo = await cliente.save();

            // Cria carro
            const carro = new Carro({
                cliente: clienteSalvo._id,
                modelo: resto.modelo,
                marca: resto.marca,
                anoFabricacao: resto.anoFabricacao,
                cor: resto.cor,
                categoria: resto.categoria,
                quilometragem: resto.quilometragem,
                carImage: resto.carImage,
                placa: resto.placa,
                // outros campos de carro
            });
            await carro.save();
        } else if (tipoConta === 'proprietário') {
            // Cria proprietário
            const proprietario = new Proprietario({
                usuario: usuarioSalvo._id,
                nomeOficina: resto.nomeOficina,
                cnpj: resto.cnpj,
                endereco: resto.endereco,
                cidadeOficina: resto.cidadeOficina,
                horarioFuncionamento: resto.horarioFuncionamento,
                descricaoOficina: resto.descricaoOficina,
                ownerImage: resto.ownerImage,
                proprietyImage: resto.proprietyImage,
                // outros campos de proprietário
            });
            await proprietario.save();
        }

        res.status(201).json(usuarioSalvo);
    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err)
        res.status(400).json({ error: err.message });
    }

};

module.exports = { criarUsuario }