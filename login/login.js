'use strict'



// Função de login
async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");

    if (!email || !senha) {
        mensagem.innerText = "Preencha todos os campos!";
        return;
    }

    const url = 'https://back-spider.vercel.app/login';

    const data = {
        email: email,
        senha: senha
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
       // const result = await response.json()



        if (response.ok) {
            alert("Funcionou!!!")

            mensagem.innerText = "Login realizado com sucesso!";
            mensagem.style.color = "green";
            // Para depuração
            // Redirecionar ou salvar token aqui, se necessário
        } else {
            mensagem.innerText = "E-mail ou senha incorretos.";
            mensagem.style.color = "red";
        }
    } catch (error) {
        mensagem.innerText = "Erro de conexão com o servidor.";
        mensagem.style.color = "red";
        console.error(error);
    }
}





function togglePassword() {
    let passwordInput = document.getElementById("password");
    let icon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.textContent = "👁️"; // Ícone de olho aberto
    } else {
        passwordInput.type = "password";
        icon.textContent = "🔒"; // Ícone de cadeado
    }
}

function showForgotPassword() {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("forgot-password-container").classList.remove("hidden");
}


