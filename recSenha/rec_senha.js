'use strict'

async function recSenha() {
    const email = document.getElementById("email").value
    const wordKey = document.getElementById("wordKey").value
    const mensagem = document.getElementById("mensagem")

    if (!email || !wordKey) {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    const url = 'https://back-spider.vercel.app/user/RememberPassword';

    const data = {
        email: email,
        wordKey: wordKey
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
        const result = await response.json();



        if (response.ok) {
            alert("Email enviado com sucesso!");
            mensagem.innerText = "Verifique seu e-mail. Instruções enviadas.";
            mensagem.style.color = "green";

            localStorage.setItem('id', result.id)

            window.location.href = "../confirmSenha/confirm.html"

        } else {
            alert("Deu RUIM!!!");
            mensagem.textContent = result.message || "Erro ao atualizar a senha.";
            mensagem.style.color = "red";
        }
    } catch (error) {
        mensagem.textContent = "Erro de conexão com o servidor.";
         mensagem.style.color = "red";
        console.error(error);
    }
}
