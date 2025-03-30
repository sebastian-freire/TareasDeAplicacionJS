const numeros = [
  44, 45, 19, 41, 28, -7, -9, 11, 8, -9, 15, 44, 2, 15, 31, -5, 0, 6, 27, 14
];

function getSum(nums) {
  if (nums instanceof Array) {
    const SumaTotal = nums.reduce((sum, num) => sum + num);
    console.log(SumaTotal);
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}

getSum(numeros);
