const input = document.getElementById("input");

input.addEventListener("focus", () => {
  input.style.border = "5px solid red";
});

input.addEventListener("blur", () => {
  input.style.border = "1px solid grey";
});
