async function confirm() {

    const senha = document.getElementById("password").value
    const confirmSenha = document.getElementById("confirm").value
    const mensagem = document.getElementById("mensagem");

    if (!senha || !confirmSenha) {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    if (senha !== confirmSenha) {
        mensagem.innerText = "As senhas não coincidem!";
        mensagem.style.color = "red";
        return;
    }

    let id = localStorage.getItem("id")
    const url = `https://back-spider.vercel.app/user/newPassword/${id}`

    const data = {
        senha: senha
    };

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if (response.ok) {
            alert("Funcionou!!!");
            // mensagem.textContent = "Verifique o email. Senha atualizada com sucesso!";
            // mensagem.style.color = "green";

             window.location.href = "../login/login.html";
        } else {
            alert("Deu RUIM!!!");
            // mensagem.textContent = result.message || "Erro ao atualizar a senha.";
            // mensagem.style.color = "red";
        }
    } catch (error) {
        // mensagem.textContent = "Erro de conexão com o servidor.";
        // mensagem.style.color = "red";
        console.error(error);
    }
}
