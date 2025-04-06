const imagen = document.getElementById("imagen");

const ruta1 = "imagen1.jpg";
const ruta2 = "imagen2.jpg";

imagen.addEventListener("mouseenter", function () {
  imagen.src = ruta2;
});

imagen.addEventListener("mouseleave", function () {
  imagen.src = ruta1;
});

const preloader = new Image();
preloader.src = ruta2;
