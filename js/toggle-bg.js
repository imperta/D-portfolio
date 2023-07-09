
let buttonScreen = document.getElementById("button-mode");
let body = document.querySelector("body");
// Estilo de imagen del modo Light y Dark
let sun = document.querySelector(".active-w");
let moon = document.querySelector(".active-d");


// Obtener el estado del modo oscuro almacenado en localStorage
let isDarkMode = localStorage.getItem("dark-mode") === "true";
let isLightMode = localStorage.getItem("") === "true";

// Si el modo oscuro está activado, aplicar las clases correspondientes
if (isDarkMode) {
  body.classList.add("active-bg");
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
}

buttonScreen.addEventListener("click", function () {
  body.classList.toggle("active-bg");
  if (document.body.classList.contains("light-mode")) {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    sun.style.display = "block";
    moon.style.display = "none";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }

  // Actualizar el estado del modo oscuro en localStorage
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
});