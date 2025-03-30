const numeros = [
  44, -7, 44, 45, 19, 41, 28, -7, -9, 11, 8, -9, 15, 44, 2, 15, 31, -5, 0, 6,
  27, 14
];

const numeros2 = [1, 2, 2, 3, 4, 4, 4, 5];

function duplicates(nums) {
  if (nums instanceof Array) {
    let totalDuplicados = 0;
    for (const num of nums) {
      let nuevoNums = nums.filter((x) => x !== num);
      if (nums.length - nuevoNums.length >= 2) {
        totalDuplicados++;
        console.log("N duplicado: " + num); //esto simplemente es una prueba mas visual
      }
      nums = nuevoNums;
    }
    console.log("Total duplicados: " + totalDuplicados);
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}

duplicates(numeros);
duplicates(numeros2);
