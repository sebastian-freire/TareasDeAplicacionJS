const form = document.getElementById("formulario");

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

function validarNombre() {
  if (nombreInput.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    return false;
  }
  errorNombre.textContent = "";
  return true;
}

function validarEmail() {
  const email = emailInput.value.trim();
  if (email === "") {
    errorEmail.textContent = "El correo es obligatorio.";
    return false;
  }
  //No agregue validacion para que el correo este bien porque html lo hace automaticamente
  errorEmail.textContent = "";
  return true;
}

function validarPassword() {
  const password = passwordInput.value;
  if (password === "") {
    errorPassword.textContent = "La contraseña es obligatoria.";
    return false;
  } else if (password.length < 8) {
    errorPassword.textContent =
      "La contraseña debe tener al menos 8 caracteres.";
    return false;
  }
  errorPassword.textContent = "";
  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validarNombre() && validarPassword() && validarEmail()) {
    form.submit();
  }
});
