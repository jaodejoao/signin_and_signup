document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.senha === senha) {
        alert('Login realizado com sucesso!');
        // Redirecionar para a página principal ou dashboard
    } else {
        alert('E-mail ou senha incorretos!');
    }
});