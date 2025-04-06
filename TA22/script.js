const parrafo = document.getElementById("parrafo");

function mostrarTamañoVentana() {
  parrafo.innerHTML = `Tamaño actual de la ventana: 
                                 Ancho: ${window.innerWidth}px, 
                                 Alto: ${window.innerHeight}px`;
}

window.addEventListener("resize", mostrarTamañoVentana);

mostrarTamañoVentana();
