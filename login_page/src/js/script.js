function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error-msg');

    if (email === '' || password === '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert('Login realizado com sucesso! (Simulação)');
    }
}

function register() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const error = document.getElementById('reg-error-msg');

    if (name === '' || email === '' || password === '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert('Cadastro realizado! (Simulação)');
    }
}
