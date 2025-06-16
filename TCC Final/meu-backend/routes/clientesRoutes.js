const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.criarCliente);
router.get('/', clienteController.listarClientes);
router.put('/:id', clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);
router.post('/login', clienteController.loginCliente);
router.get('/:id', clienteController.buscarClientePorId);

module.exports = router;