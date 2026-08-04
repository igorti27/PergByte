let tentativasLogin = 0;

function logar() {
  const campoCPF = document.getElementById("inputCPF").value;
  const campoSenha = document.getElementById("inputSenha").value;

  if (
    camposVazios(campoCPF, campoSenha) ||
    cpfInvalido(campoCPF) ||
    senhaInvalida(campoSenha)
  ) {
    tentativasLogin++;

    if (tentativasLogin >= 5) {
      const botao = document.getElementById("botaoLogin");

      botao.disabled = true;
      const TEMPO_BLOQUEIO = 5 * 60 * 1000;

      mostrarError("Muitas tentativas. Tente novamente, em 5 minutos");

      setTimeout(() => {
        botao.disabled = false;
        tentativasLogin = 0;
      }, TEMPO_BLOQUEIO);

      return;
    }
  }
}

const msgGeral = "CPF ou Senha, inválidos!";

function camposVazios(camp1, camp2) {
  if (camp1.trim() === "" || camp2.trim() === "") {
    const msg =
      "Os campos CPF e Senha não podem ser vazios ou conter apenas espaços!";
    mostrarError(msg);
    return true;
  } else {
    return false;
  }
}

function cpfInvalido(cpfInv) {
  let cpfLimpo = cpfInv.replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpfLimpo)) {
    //Verifica se o CPF possui 11 números,se há apenas números,se não há espaços;
    mostrarError(msgGeral);
    return true;
  } else if (/^(\d)\1{10}$/.test(cpfLimpo)) {
    //Verifica se o CPF possui números repetidos em todos seus caracteres;
    mostrarError(msgGeral);
    return true;
  } else if (!calcularCPF(cpfLimpo)) {
    return true;
  }

  return false;
}

function calcularCPF(cpfInp) {
  let cpfLimpo = cpfInp.replace(/\D/g, "");

  //Cálculo primeiro dígito
  let soma = 0;

  for (let i = 0; i < 9; i++) {
    soma += Number(cpfLimpo[i]) * (10 - i);
  }

  let resto = soma % 11;

  let digito1 = resto < 2 ? 0 : 11 - resto;

  //Cálculo segundo dígito
  soma = 0;

  for (let i = 0; i < 10; i++) {
    soma += Number(cpfLimpo[i]) * (11 - i);
  }

  resto = soma % 11;

  let digito2 = resto < 2 ? 0 : 11 - resto;

  if (Number(cpfLimpo[9]) === digito1 && Number(cpfLimpo[10]) === digito2) {
    return true;
  } else {
    return false;
  }
}

function senhaInvalida(senha) {
  if (
    senha.length < 6 ||
    senha.length > 10 ||
    !/[!@#$%^&*]/.test(senha) ||
    !/[A-Z]/.test(senha) ||
    !/[a-z]/.test(senha) ||
    !/\d/.test(senha)
  ) {
    // Verifica se a senha possui um número de caracteres entre 6 e 10
    // Se há letras maiúsculas, minúsculas e caracteres especiais
    return true;
  }
  return false;
}

function mostrarError(mensagem) {
  Toastify.info({
    text: mensagem,
    duration: 10000,
    gravity: "bottom",
    position: "center",
  }).showToast();
}
