const input = document.getElementsByClassName("inputBuscar")[0];
const lista = document.getElementsByClassName("listaPersonas")[0];

const personas = [
  "Ana García",
  "Luis Fernández",
  "Elena Rodríguez",
  "Carlos Martínez",
  "Sofía Pérez",
  "Javier Gómez",
  "Laura Sánchez",
  "David Romero",
  "Isabel Díaz",
  "Andrés Muñoz"
];

function filtrarLista() {
  const textoBusqueda = input.value.toLowerCase().trim();
  personasFiltradas = personas.filter((palabra) => {
    return palabra.toLowerCase().startsWith(textoBusqueda);
  });

  lista.innerHTML = "";

  for (persona of personasFiltradas) {
    lista.innerHTML += `<li>${persona}</li>`;
  }
}

filtrarLista();
input.addEventListener("input", filtrarLista);
