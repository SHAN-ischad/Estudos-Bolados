require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const exemploRoutes = require('./routes/exemploRoutes');
const oficinaRoutes = require('./routes/oficinaRoutes');
const clienteRoutes = require('./routes/clientesRoutes');
const carroRoutes = require('./routes/carroRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Configura o CORS para aceitar requisições de qualquer origem
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/api/exemplo', exemploRoutes);
app.use('/api/oficinas', oficinaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/carros', carroRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/chat', chatRoutes);

// Conexão com o MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando na porta ${PORT}`);
});