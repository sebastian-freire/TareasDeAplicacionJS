const parrafo = document.getElementById("parrafo");

function mostrarTamañoVentana() {
  parrafo.innerHTML = `Tamaño actual de la ventana: 
                                 Ancho: <strong>${window.innerWidth}px, 
                                 Alto: <strong>${window.innerHeight}px`;
}

window.addEventListener("resize", mostrarTamañoVentana);

mostrarTamañoVentana();
