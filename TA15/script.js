const input = document.getElementsByClassName("input")[0];
const boton = document.getElementsByClassName("boton")[0];
const lista = document.getElementsByClassName("lista")[0];
const botonBorrar = document.getElementsByClassName("botonborrar")[0];

let nuevoLi = document.createElement("li");

boton.addEventListener("click", () => {
  const textoElemento = input.value.trim();

  if (textoElemento === "") {
    alert("Por favor, escribe algo para añadir a la lista.");
    return;
  }

  let nuevoLi = document.createElement("li");
  nuevoLi.textContent = textoElemento;
  lista.appendChild(nuevoLi);
  input.value = "";
  input.focus();
});

botonBorrar.addEventListener("click", () => {
  lista.lastElementChild.remove();
});
