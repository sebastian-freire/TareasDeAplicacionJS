const input = document.getElementsByClassName("input")[0];
const boton = document.getElementsByClassName("boton")[0];
const lista = document.getElementsByClassName("lista")[0];

boton.addEventListener("click", () => {
  const textoElemento = input.value.trim();

  if (textoElemento === "") {
    alert("Por favor, escribe algo para añadir a la lista.");
    return;
  }

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = textoElemento;
  lista.appendChild(nuevoLi);
  input.value = "";
  input.focus();
});
