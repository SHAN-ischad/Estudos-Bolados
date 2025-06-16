// (async () => {
//     const db = require('./bd')
//     console.log('Executou 😊😊')
//     console.log("SELECT * FROM clients")
//     const clientes = await db.consultarCliente()
//     console.log(clientes)
// })()

// (async () => {
//     const db = require('./bd')
//     const result = await db.insertCustomer({
//         nome: 'Iago',
//         idade: 22,
//         uf: 'SP'
//     })
//     console.log(result)
//     const clientes = await db.consultarCliente()
//     console.log(clientes)
// })()

(async () => {
    const db = require('./bd')
    const result2 = await db.updateCustomer(4, {
        nome: 'Iago bolado', idade: 22, uf: 'SP'

    })
    console.log(result2)
})()