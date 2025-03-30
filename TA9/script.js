const numeros = [
  44, 45, 19, 41, 28, -7, -9, 11, 8, -9, 15, 44, 2, 15, 31, -5, 0, 6, 27, 14
];

function getOdds(nums) {
  if (nums instanceof Array) {
    const odds = nums.filter((x) => x % 2 !== 0);
    console.log(odds);
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}

getOdds(numeros);
