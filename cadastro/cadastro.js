// Mostra a tela de cadastro
function showRegister() {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("forgot-password-container").classList.add("hidden");
    document.getElementById("register-container").classList.remove("hidden");
}




async function register() {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;
    const message = document.getElementById("register-message");

    if (!name || !email || !password || !confirm) {
        message.innerText = "Preencha todos os campos!";
        message.style.color = "red";
        return;
    }

    if (password !== confirm) {
        message.innerText = "As senhas não coincidem!";
        message.style.color = "red";
        return;
    }

    const url = 'https://back-spider.vercel.app/user/cadastrarUser'; 

    const data = { 
        nome: name, 
        email: email, 
        senha: password,
        premium: "1",
        senhaRecuperacao: "test",
        imagemPerfil: "test "
     };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status == 201) {
            alert("Funcionou!!!")
            // message.innerText = "Cadastro realizado com sucesso!";
            // message.style.color = "green";
            // Redirecionar ou limpar campos aqui se quiser
        } else {
            const result = await response.json();
            message.innerText = result.message || "Erro ao cadastrar.";
            message.style.color = "red";
        }
    } catch (error) {
        alert('DEU RUIIIIM!!!')
       // message.innerText = "Erro de conexão com o servidor.";
      //  message.style.color = "red";
        console.error(error);
    }
}