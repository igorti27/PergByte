function realizarLogout() {
  localStorage.removeItem("emailUsuario");
  localStorage.removeItem("senhaLogin");

  window.location.href = "../index.html";
}
