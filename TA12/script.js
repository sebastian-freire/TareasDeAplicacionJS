function generatePassword(length) {
  if (typeof length === "number") {
    if (length >= 8) {
      const minusculas = "abcdefghijklmnopqrstuvwxyz";
      const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numeros = "0123456789";
      const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?/~";

      let caracteresPermitidos = minusculas + mayusculas + numeros + simbolos;

      let pass = [];
      pass.push(letraAleatoria(minusculas));
      pass.push(letraAleatoria(mayusculas));
      pass.push(letraAleatoria(numeros));
      pass.push(letraAleatoria(simbolos));

      length = length - 4;
      for (let i = 0; i < length; i++) {
        pass.push(letraAleatoria(caracteresPermitidos));
      }
      pass = shuffleArray(pass);
      pass = pass.join("");
      console.log(pass);
    } else {
      console.log("El largo minimo permitido son 8 caracteres.");
    }
  } else {
    console.log("El tipo de dato ingresado es incorrecto.");
  }
}

function letraAleatoria(str) {
  const index = Math.floor(Math.random() * str.length);
  return str.charAt(index);
}

function shuffleArray(array) {
  //Este algoritmo lo encontre en google es para terminar de aleatorizar los elementos, sino quedan los 4 requerimentos juntos.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

generatePassword(8);
generatePassword(2);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(20);
generatePassword(50);
