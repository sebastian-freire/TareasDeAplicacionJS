function convertToFahrenheit(temp) {
  if (typeof temp === "number") {
    console.log(((temp * 9) / 5 + 32).toFixed(1));
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}
convertToFahrenheit;

function convertToCelcius(temp) {
  if (typeof temp === "number") {
    console.log((((temp - 32) * 5) / 9).toFixed(1));
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}

console.log("Prueba 1: ");
convertToCelcius(100);

console.log("\nPrueba 2: ");
convertToCelcius(127);

console.log("\nPrueba 3: ");
convertToFahrenheit(37.8);

console.log("\nPrueba 4: ");
convertToFahrenheit(21.0);

console.log("\nPrueba error 5: ");
convertToFahrenheit("jaja");

console.log("\nPrueba error 6: ");
convertToCelcius("jaja");
