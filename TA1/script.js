function repeatString(texto, repeticiones) {
  if (typeof texto === "string" && typeof repeticiones === "number") {
    let textoFinal = "";
    for (let i = 0; i < repeticiones; i++) {
      textoFinal = textoFinal + "\n" + texto;
    }
    console.log(textoFinal);
  } else {
    console.log("El formato de lo datos introducidos es incorrecto.");
  }
}

console.log("Prueba 1: ");
repeatString("Hola Mundo Bien", 6);
console.log("\nPrueba error 2: ");
repeatString("Hola Mundo Mal", "h");
