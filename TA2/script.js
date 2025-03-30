function reverseString(texto) {
  if (typeof texto === "string") {
    let textoFinal = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoFinal = textoFinal + texto[i];
    }
    console.log(textoFinal);
  } else {
    console.log("El formato de lo datos introducidos es incorrecto.");
  }
}

console.log("Prueba 1: ");
reverseString("Hola Mundo Bien");
console.log("\nPrueba 2: ");
reverseString("Hola Mundo Mal");
console.log("\nPrueba error 3: ");
reverseString(true);
