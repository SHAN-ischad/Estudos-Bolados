// db.js
const mysql = require("mysql2/promise");

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306, // ou 3306, que é a padrão
        user: 'root',
        password: '', // Coloque a senha aqui, se houver
        database: 'crud'
    });

    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

// Opcional: executa a conexão ao carregar o módulo
// connect();

async function consultarCliente() {
    const conn = await connect()
    const [rows] = await
        conn.query("SELECT * FROM clients")
    return rows
}

async function insertCustomer(customer) {
    const conn = await connect()
    const sql = 'INSERT INTO clients (nome, idade, uf) VALUES (?,?,?) ;'
    const values = [customer.nome, customer.idade, customer.uf]
    return await conn.query(sql, values)
}

async function updateCustomer(id, customer) {
    const conn = await connect()
    const sql = 'UPDATE  clients SET nome=?, idade=?, uf=? WHERE id=?'
    const values = [customer.nome, customer.idade, customer.uf, id]
    return await conn.query(sql, values)
}


module.exports = { consultarCliente, insertCustomer, updateCustomer }