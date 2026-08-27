function atualizarTema(tema) {
  document.documentElement.setAttribute("data-bs-theme", tema);

  localStorage.setItem("data-bs-theme", tema);

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.classList.remove("active");
  });

  if (tema === "light") {
    document.getElementById("botaoTemaClaro").classList.add("active");
  } else {
    document.getElementById("botaoTemaEscuro").classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("data-bs-theme") || "light";

  atualizarTema(tema);

  document.getElementById("botaoTemaClaro").addEventListener("click", () => {
    atualizarTema("light");
  });

  document.getElementById("botaoTemaEscuro").addEventListener("click", () => {
    atualizarTema("dark");
  });
});
