const parrafo = document.getElementsByClassName("parrafo")[0];
const boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", () => {
  const texto = parrafo.textContent;
  const numero = parseFloat(texto) + 1;
  parrafo.textContent = numero;
});
