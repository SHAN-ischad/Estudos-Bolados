const email = document.getElementById('email')
const password = document.getElementById('password')
const bottom_form = document.getElementById('bottom_form')
const form = document.getElementById('form')

const AutenticationForm = () => {
    const emailValue = email.value
    const passwordValue = password.value
    if (emailValue === '' || passwordValue === '') {
        alert('email ou senha inválida')
    } else {
        alert('Login efetuado com sucesso')
    }
    form.reset()
}

bottom_form.addEventListener('click', () => {
    AutenticationForm()
})
