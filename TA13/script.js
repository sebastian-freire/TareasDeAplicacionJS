const parrafo = document.getElementsByClassName("parrafo")[0];
const boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", () => {
  parrafo.textContent = "Texto cambiado";
});
