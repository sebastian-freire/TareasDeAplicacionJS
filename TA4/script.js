function sumAll(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a > b) {
      [a, b] = [b, a];
    }
    let suma = 0;
    for (let i = a; i <= b; i++) {
      suma += i;
    }
    console.log(suma);
  } else {
    console.log("El tipo de dato ingresado es incorrecto");
  }
}

console.log("Prueba 1: ");
sumAll(1, 3);

console.log("\nPrueba 2: ");
sumAll(1, 100);

console.log("\nPrueba 3: ");
sumAll(100, 3);

console.log("\nPrueba error 4: ");
sumAll("a", 2);
