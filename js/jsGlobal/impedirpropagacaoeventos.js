$(document).ready(function () {
  $(document).on("click", "[data-stop-propagation]", function (e) {
    e.stopPropagation();
  });
  // impede a propagação de eventos para os elementos ancestrais
  // por exemplo, ao clicar no botão editar no card, posso ativar visualizar informações.
  // pois, ocorre quando clica-se no card.
  //.on vincula um ou mais eventos;
});
