const btnLogin = document.getElementById("btn-login");
const btnClose = document.querySelector(".js-close");
const overlayLogin = document.querySelector(".js-login");

const overlayCad = document.querySelector(".js-cadastro");
const btnCad = document.getElementById("js-btn-cad");
const buttonCad = document.querySelector(".js-cad");
const btnCloseCad = document.querySelector(".js-close-cad");

function openMenuLogin() {
  overlayLogin.classList.toggle("active");
}

function openMenuCad() {
  overlayCad.classList.toggle("active");
  overlayLogin.classList.remove("active");
}

btnLogin.addEventListener("click", openMenuLogin);

btnClose.addEventListener("click", openMenuLogin);

btnCad.addEventListener("click", openMenuCad);

buttonCad.addEventListener("click", openMenuCad);

btnCloseCad.addEventListener("click", openMenuCad);

// Função para validar a complexidade da senha
function validarSenha(senha) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
  return regex.test(senha);
}

// Função para cadastrar um usuário
function cadastrarUsuario() {
  const nome = document.querySelector("#inputNomeCadastro").value;
  const email = document.querySelector("#inputEmailCadastro").value;
  const senha = document.querySelector("#inputSenhaCadastro").value;

  if (!nome || !email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarSenha(senha)) {
    alert(
      "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial."
    );
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Usuário cadastrado com sucesso!");
}

// Função para realizar o login
function realizarLogin() {
  const email = document.querySelector("#inputEmailLogin").value;
  const senha = document.querySelector("#inputSenhaLogin").value;

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    alert("Credenciais inválidas. Por favor, tente novamente.");
    return;
  }

  btnLogin.innerHTML = `${usuario.nome}`;

  alert(`Bem-vindo, ${usuario.nome}!`);
  // Aqui você pode redirecionar o usuário ou executar outras ações após o login bem-sucedido.
}

// Adicionando os event listeners para os botões de cadastro e login
document
  .querySelector("#buttonCadastro")
  .addEventListener("click", function (e) {
    e.preventDefault();
    cadastrarUsuario();
  });

document.querySelector("#buttonLogin").addEventListener("click", function (e) {
  e.preventDefault();
  realizarLogin();
});
