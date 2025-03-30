function removeFromArray(arreglo, item) {
  if (arreglo instanceof Array) {
    let indice = arreglo.indexOf(item);
    arreglo.splice(indice, 1);
    let salida = "[";
    for (const ele of arreglo) {
      salida = salida + " " + ele;
    }
    salida = salida + " ]";
    console.log(salida);
  } else {
    console.log("Error: El primer parametro debe ser un array");
  }
}

let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];

console.log("Prueba 1: ");
removeFromArray(vegetales, "Nabo");
console.log("\nPrueba error 2: ");
removeFromArray("Hola Mundo Mal");
