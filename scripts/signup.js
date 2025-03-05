// Adiciona um evento de submissão ao formulário de registro
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const repetirSenha = document.getElementById('repetir-senha').value;
    const senhaErro = document.getElementById('senha-erro');

    // Verifica se as senhas correspondem
    if (senha !== repetirSenha) {
        // Exibe uma mensagem de erro se as senhas não corresponderem
        senhaErro.style.display = 'block';
        return;
    } else {
        // Oculta a mensagem de erro se as senhas corresponderem
        senhaErro.style.display = 'none';
    }

    // Cria um objeto de usuário com os dados do formulário
    const user = {
        nome: nome,
        dataNascimento: dataNascimento,
        email: email,
        senha: senha
    };

    // Armazena o objeto de usuário no localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Exibe uma mensagem de sucesso e redireciona para a página de login
    alert('Registro realizado com sucesso!');
    window.location.href = 'index.html';
});