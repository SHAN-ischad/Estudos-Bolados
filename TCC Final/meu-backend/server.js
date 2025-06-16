const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exemploRoutes = require('./routes/exemploRoutes');
const oficinaRoutes = require('./routes/oficinaRoutes');
const clienteRoutes = require('./routes/clientesRoutes');
const carroRoutes = require('./routes/carroRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const chatRoutes = require('./routes/chatRoutes');
const notificacaoRoutes = require('./routes/notificacaoRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rotas
app.use('/api/exemplos', exemploRoutes);
app.use('/api/oficinas', oficinaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/carros', carroRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/notificacoes', notificacaoRoutes);

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});