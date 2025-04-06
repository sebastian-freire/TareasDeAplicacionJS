const parrafo = document.getElementsByClassName("parrafo")[0];
const boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", () => {
  const estiloActual = window.getComputedStyle(parrafo);
  if (estiloActual.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
});
