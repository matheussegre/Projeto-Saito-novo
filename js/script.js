const btnLogin = document.getElementById("btn-login");
const btnClose = document.querySelector(".js-close");
const overlayLogin = document.querySelector(".js-login");
const contentLogin = document.querySelector(".js-content-login");

const overlayCad = document.querySelector(".js-cadastro");
const btnCad = document.getElementById("js-btn-cad");
const buttonCad = document.querySelector(".js-cad");
const btnCloseCad = document.querySelector(".js-close-cad");
const contentCad = document.querySelector(".js-content-cad");

const btnProd = document.querySelector(".js-btn-prod");
const btnProd2 = document.querySelector(".js-btn-prod2");
const overlayProd = document.querySelector(".js-produtos");
const btnCloseProd = document.querySelector(".js-close-prod");

const btnCar = document.getElementById("btn-car");
const overlayCar = document.querySelector(".js-car");

const carrinho = document.querySelector("#carrinho");

function openMenuLogin(event) {
  event.preventDefault();

  overlayLogin.classList.toggle("active");
  contentLogin.classList.toggle("move");
}

function openMenuCad(event) {
  event.preventDefault();

  overlayCad.classList.toggle("active");
  contentCad.classList.toggle("move");

  overlayLogin.classList.remove("active");
  contentLogin.classList.remove("move");
}

function openProd(event) {
  event.preventDefault();

  overlayProd.classList.toggle("active");
  overlayProd.classList.toggle("move");
}

function openCar(event) {
  event.preventDefault();

  overlayCar.classList.toggle("active");
  overlayCar.classList.toggle("move");
}

btnLogin.addEventListener("click", openMenuLogin);

btnClose.addEventListener("click", openMenuLogin);

btnCad.addEventListener("click", openMenuCad);

buttonCad.addEventListener("click", openMenuCad);

btnCloseCad.addEventListener("click", openMenuCad);

btnProd.addEventListener("click", openProd);

btnCar.addEventListener("click", openCar);

btnProd2.addEventListener("click", openProd);
btnCloseProd.addEventListener("click", openProd);

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

function addProduto1() {
  const produto1 = document.getElementById("produto1");
  const titulo = produto1.getAttribute("titulo");
  const preco = produto1.getAttribute("preco");
  var conteudoDiv = document.createElement("div");
  var qtd = 1;
  conteudoDiv.className = "conteudo";
  conteudoDiv.id = "produtoCarrinho";
  var prodDiv = document.createElement("div");
  prodDiv.className = "prod";
  var nomeProduto = document.createElement("strong");
  nomeProduto.textContent = titulo;
  var valorProduto = document.createElement("strong");
  valorProduto.textContent = `R$ ${preco}`;
  prodDiv.appendChild(nomeProduto);
  prodDiv.appendChild(valorProduto);
  var qtdDiv = document.createElement("div");
  qtdDiv.className = "qtd";
  var botaoMenos = document.createElement("button");
  botaoMenos.textContent = "-";
  var formulario = document.createElement("form");
  formulario.action = "";
  var inputQtd = document.createElement("input");
  inputQtd.type = "text";
  inputQtd.value = `${qtd}`;
  var botaoMais = document.createElement("button");
  botaoMais.textContent = "+";
  formulario.appendChild(inputQtd);
  qtdDiv.appendChild(botaoMenos);
  qtdDiv.appendChild(formulario);
  qtdDiv.appendChild(botaoMais);
  conteudoDiv.appendChild(prodDiv);
  conteudoDiv.appendChild(qtdDiv);
  carrinho.appendChild(conteudoDiv);
  botaoMais.addEventListener("click", function () {
    qtd = qtd + 1;
    inputQtd.value = `${qtd}`;
  });
  botaoMenos.addEventListener("click", function () {
    qtd = qtd - 1;
    inputQtd.value = `${qtd}`;
    if (inputQtd.value == "0") {
      console.log("oi");
      conteudoDiv.style.display = "none";
    }
  });

  overlayProd.classList.toggle("active");
  overlayProd.classList.toggle("move");
}
function addProduto2() {
  const produto2 = document.getElementById("produto2");
  const titulo = produto2.getAttribute("titulo");
  const preco = produto2.getAttribute("preco");
  var qtd = 1;
  var conteudoDiv = document.createElement("div");
  conteudoDiv.className = "conteudo";
  conteudoDiv.id = "produtoCarrinho";
  var prodDiv = document.createElement("div");
  prodDiv.className = "prod";
  var nomeProduto = document.createElement("strong");
  nomeProduto.textContent = titulo;
  var valorProduto = document.createElement("strong");
  valorProduto.textContent = `R$ ${preco}`;
  prodDiv.appendChild(nomeProduto);
  prodDiv.appendChild(valorProduto);
  var qtdDiv = document.createElement("div");
  qtdDiv.className = "qtd";
  var botaoMenos = document.createElement("button");
  botaoMenos.textContent = "-";
  var formulario = document.createElement("form");
  formulario.action = "";
  var inputQtd = document.createElement("input");
  inputQtd.type = "text";
  inputQtd.value = `${qtd}`;
  var botaoMais = document.createElement("button");
  botaoMais.textContent = "+";
  formulario.appendChild(inputQtd);
  qtdDiv.appendChild(botaoMenos);
  qtdDiv.appendChild(formulario);
  qtdDiv.appendChild(botaoMais);
  conteudoDiv.appendChild(prodDiv);
  conteudoDiv.appendChild(qtdDiv);
  carrinho.appendChild(conteudoDiv);
  botaoMais.addEventListener("click", function () {
    qtd = qtd + 1;
    inputQtd.value = `${qtd}`;
  });
  botaoMenos.addEventListener("click", function () {
    qtd = qtd - 1;
    inputQtd.value = `${qtd}`;
    if (inputQtd.value == "0") {
      console.log("oi");
      conteudoDiv.style.display = "none";
    }
  });

  overlayProd.classList.toggle("active");
  overlayProd.classList.toggle("move");
}
function addProduto3() {
  const produto3 = document.getElementById("produto3");
  const titulo = produto3.getAttribute("titulo");
  const preco = produto3.getAttribute("preco");
  var conteudoDiv = document.createElement("div");
  var qtd = 1;
  conteudoDiv.className = "conteudo";
  conteudoDiv.id = "produtoCarrinho";
  var prodDiv = document.createElement("div");
  prodDiv.className = "prod";
  var nomeProduto = document.createElement("strong");
  nomeProduto.textContent = titulo;
  var valorProduto = document.createElement("strong");
  valorProduto.textContent = `R$ ${preco}`;
  prodDiv.appendChild(nomeProduto);
  prodDiv.appendChild(valorProduto);
  var qtdDiv = document.createElement("div");
  qtdDiv.className = "qtd";
  var botaoMenos = document.createElement("button");
  botaoMenos.textContent = "-";
  var formulario = document.createElement("form");
  formulario.action = "";
  var inputQtd = document.createElement("input");
  inputQtd.type = "text";
  inputQtd.value = `${qtd}`;
  var botaoMais = document.createElement("button");
  botaoMais.textContent = "+";
  formulario.appendChild(inputQtd);
  qtdDiv.appendChild(botaoMenos);
  qtdDiv.appendChild(formulario);
  qtdDiv.appendChild(botaoMais);
  conteudoDiv.appendChild(prodDiv);
  conteudoDiv.appendChild(qtdDiv);
  carrinho.appendChild(conteudoDiv);
  botaoMais.addEventListener("click", function () {
    qtd = qtd + 1;
    inputQtd.value = `${qtd}`;
  });
  botaoMenos.addEventListener("click", function () {
    qtd = qtd - 1;
    inputQtd.value = `${qtd}`;
    if (inputQtd.value == "0") {
      console.log("oi");
      conteudoDiv.style.display = "none";
    }
  });
  overlayProd.classList.toggle("active");
  overlayProd.classList.toggle("move");
}

function finalizar(){
  alert("Pedido finalizado com sucesso!");
}
