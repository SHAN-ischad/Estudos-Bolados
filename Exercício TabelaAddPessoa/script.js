const button = document.getElementById('button')

const verificarLogin = () => {

    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value

    let usuarioCorreto = 'admin'
    let senhaCorreta = '12345'

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log('Acesso permitido' + usuario)

    } else {
        alert('Usuário ou senha incorretos')
    }
}

button.addEventListener('click', () => {
    verificarLogin()
})

