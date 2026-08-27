const CHAVE_CONTAS = "pergByteContas";
const CHAVE_SESSAO = "pergByteSessao";

function buscarContas() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_CONTAS) || "[]");
  } catch {
    return [];
  }
}

function salvarContas(contas) {
  localStorage.setItem(CHAVE_CONTAS, JSON.stringify(contas));
}

function mostrarMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = texto;
  mensagem.className = tipo;
}

function limparMensagem() {
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "";
  mensagem.className = "";
}

function trocarFormulario(id, botao) {
  document.querySelectorAll(".formulario").forEach(function (formulario) {
    formulario.classList.remove("ativo");
  });

  document.querySelectorAll(".aba").forEach(function (aba) {
    aba.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativo");
  botao.classList.add("ativa");

  limparMensagem();
}

function cadastrar(event) {
  event.preventDefault();

  const formulario = event.target;

  const nome = formulario.nome.value.trim();
  const email = formulario.email.value.trim().toLowerCase();
  const senha = formulario.senha.value;
  const confirmacao = formulario.confirmacao.value;

  if (nome.length < 3) {
    mostrarMensagem("Digite seu nome completo.", "erro");

    return;
  }

  if (senha.length < 6) {
    mostrarMensagem("A senha precisa ter pelo menos 6 caracteres.", "erro");

    return;
  }

  if (senha !== confirmacao) {
    mostrarMensagem("A senha e a confirmação não são iguais.", "erro");

    return;
  }

  const contas = buscarContas();

  const emailJaCadastrado = contas.some(function (conta) {
    return conta.email === email;
  });

  if (emailJaCadastrado) {
    mostrarMensagem("Esse e-mail já está cadastrado.", "erro");

    return;
  }

  contas.push({
    nome: nome,
    email: email,
    senha: senha,
  });

  salvarContas(contas);
  formulario.reset();

  const botaoLogin = document.querySelectorAll(".aba")[0];

  trocarFormulario("login", botaoLogin);

  mostrarMensagem("Cadastro realizado. Agora faça seu login.", "sucesso");
}

function entrar(event) {
  event.preventDefault();

  const formulario = event.target;

  const email = formulario.email.value.trim().toLowerCase();
  const senha = formulario.senha.value;

  const contaEncontrada = buscarContas().find(function (conta) {
    return conta.email === email;
  });

  if (!contaEncontrada) {
    mostrarMensagem("Não existe uma conta cadastrada com esse e-mail.", "erro");

    return;
  }

  if (contaEncontrada.senha !== senha) {
    mostrarMensagem("Senha incorreta. Tente novamente.", "erro");

    return;
  }

  localStorage.setItem(
    CHAVE_SESSAO,
    JSON.stringify({
      nome: contaEncontrada.nome,
      email: contaEncontrada.email,
    }),
  );

  mostrarMensagem("Login realizado com sucesso.", "sucesso");

  setTimeout(function () {
    window.location.href = "emprestimos.html";
  }, 700);
}

function alterarSenha(event) {
  event.preventDefault();

  const formulario = event.target;

  const email = formulario.email.value.trim().toLowerCase();
  const senha = formulario.senha.value;
  const confirmacao = formulario.confirmacao.value;

  const contas = buscarContas();

  const posicao = contas.findIndex(function (conta) {
    return conta.email === email;
  });

  if (posicao === -1) {
    mostrarMensagem("Não existe uma conta cadastrada com esse e-mail.", "erro");

    return;
  }

  if (senha.length < 6) {
    mostrarMensagem(
      "A nova senha precisa ter pelo menos 6 caracteres.",
      "erro",
    );

    return;
  }

  if (senha !== confirmacao) {
    mostrarMensagem("A nova senha e a confirmação não são iguais.", "erro");

    return;
  }

  contas[posicao].senha = senha;

  salvarContas(contas);
  formulario.reset();

  const botaoLogin = document.querySelectorAll(".aba")[0];

  trocarFormulario("login", botaoLogin);

  mostrarMensagem("Senha alterada. Você já pode entrar.", "sucesso");
}
