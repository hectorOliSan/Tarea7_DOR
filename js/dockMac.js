function aumentar(e) {
  e.classList.add("tam1");

  nodos(e, "nextElementSibling", "add");
  nodos(e, "previousElementSibling", "add");
}

function volver(e) {
  e.classList.remove("tam1");

  nodos(e, "nextElementSibling", "remove");
  nodos(e, "previousElementSibling", "remove");
}

const nodos = (e, nodo, metodo) => {
  if (e[nodo] != null) {
    e[nodo].classList[metodo]("tam2");
    if (e[nodo][nodo] != null) e[nodo][nodo].classList[metodo]("tam3");
  }
};
