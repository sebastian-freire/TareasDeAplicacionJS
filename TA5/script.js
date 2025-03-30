function leepYears(year) {
  if (typeof year === "number") {
    let leepYear = false;
    if (year % 400 === 0) {
      leepYear = true;
    } else {
      if (year % 4 === 0 && year % 100 !== 0) {
        leepYear = true;
      }
    }
    console.log(leepYear);
  } else {
    console.log("El tipo de dato ingresado es incorrecto");
  }
}

console.log("Prueba 1: ");
leepYears(1604);

console.log("\nPrueba 2: ");
leepYears(2023);

console.log("\nPrueba 3: ");
leepYears(2024);

console.log("\nPrueba 4: ");
leepYears(200);

console.log("\nPrueba error 5: ");
leepYears("jaja");
