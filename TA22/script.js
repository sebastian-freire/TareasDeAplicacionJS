const parrafo = document.getElementById("parrafo");

function mostrarTamañoVentana() {
  parrafo.innerHTML = `Tamaño actual de la ventana: 
                                 Ancho: <strong>${window.innerWidth}px</strong>, 
                                 Alto: <strong>${window.innerHeight}px</strong>`;
}

window.addEventListener("resize", mostrarTamañoVentana);

mostrarTamañoVentana();
