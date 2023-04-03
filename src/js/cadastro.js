// ***************HABILITANDO VISUALIZAÇÃO DE SENHA***************
const toggleSenha = document.querySelector('#toggle-senha');
const senha = document.querySelector('#senha');
const toggleConfirmaSenha = document.querySelector('#toggle-confirma-senha');
const confirmaSenha = document.querySelector('#confirma-senha');

toggleSenha.addEventListener('click', function (e) {
    const type = senha.getAttribute('type') === 'password' ? 'text' : 'password';
    senha.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

toggleConfirmaSenha.addEventListener('click', function (e) {
    const type = confirmaSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmaSenha.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});



//***************SISTEMA DE VALIDAÇÃO***************
let nomeInput = document.getElementById("nome")
let emailInput = document.getElementById("email")
let senhaInput = document.getElementById("senha")
let confirmaSenhaInput = document.getElementById("confirma-senha")


nomeInput.addEventListener("blur", function () {
    validarNome();
});

emailInput.addEventListener("blur", function () {
    validarEmail();
})

senhaInput.addEventListener("blur", function () {
    validarSenha();
    validarConfirmaSenha();
});

confirmaSenhaInput.addEventListener("blur", function () {
    validarConfirmaSenha();
})

function loginAprovado() {
    window.location.replace('index.html')
}

function validarNome() {
    let nome = nomeInput.value.trim();
    let nomeErro = document.getElementById("nome-erro");
    if (nome.length === 0) {
        nomeInput.style.borderColor = "red"
        nomeErro.innerHTML = "por favor, digite seu nome";
        nomeErro.style.color = "red"
    } else {
        nomeInput.style.borderColor = "";
        nomeErro.innerHTML = "";

    }
}

function validarEmail() {//VALIDANDO EMAIL
    let email = emailInput.value.trim();
    let emailErro = document.getElementById("email-erro");
    if (email.length === 0) {
        emailInput.style.borderColor = "red";
        emailErro.innerHTML = "Por favor, digite seu email";
        emailErro.style.color = "red";
    } else if (!isValidEmail(email)) {
        emailInput.style.borderColor = "red";
        emailErro.innerHTML = "Por favor, digite um email válido";

    } else {
        emailInput.style.borderColor = "";
        emailErro.innerHTML = "";
    }
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validarSenha() {
    let senha = senhaInput.value.trim();
    let senhaErro = document.getElementById("senha-erro");
    if (senha.length < 6) {
        senhaInput.style.borderColor = "red";
        senhaErro.innerHTML = "A senha deve ter no mínimo 6 caracteres";
        senhaErro.style.color = "red"
    } else {
        senhaInput.style.borderColor = "";
        senhaErro.innerHTML = "";
    }
}

function validarConfirmaSenha() {
    let senha = senhaInput.value;
    let confirmaSenha = confirmaSenhaInput.value;
    let confirmaSenhaErro = document.getElementById("confirma-senha-erro");
    if (senha !== confirmaSenha) {
        senhaInput.style.borderColor = "red";
        confirmaSenhaInput.style.borderColor = "red";
        confirmaSenhaErro.innerHTML = "As senhas não coincidem";
        confirmaSenhaErro.style.color = "red"
    } else {
        confirmaSenhaInput.style.borderColor = "";
        senhaInput.style.borderColor = "";
        confirmaSenhaErro.innerHTML = "";
    }
}

// ***************VERIFICANDO OS INPUTS PARA VALIDAÇÃO***************
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarSenha();
    validarConfirmaSenha();
    submeterFormulario();
});

function submeterFormulario() {
    if (nomeInput.style.borderColor === "" && emailInput.style.borderColor === "" &&
        senhaInput.style.borderColor === "" && confirmaSenhaInput.style.borderColor === "") {

        // Armazenando os dados do usuário no localStorage somente após a validação dos campos
        let usuario = {
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
            senha: senhaInput.value.trim()
        }

        let usuarioString = JSON.stringify(usuario);

        localStorage.setItem("usuario", usuarioString);

        window.location.href = "index.html";
    }
}

function validaSenha(){
    const bvindas = document.getElementById("mensagem");
    bvindas.innerHTML = `<h1>Bem vindo, ${usuario.nome}`;
}

    let usuarioString = localStorage.getItem("usuario");
    let usuario = JSON.parse(usuarioString);
    bemVindo(usuario); 

