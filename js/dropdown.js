const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    const dropButtons = document.querySelectorAll(".dropbtn");
    const dropdowns = document.querySelectorAll(".dropdown-content");
    
    dropButtons.forEach(function (wButton, index) {
      const dpElement = dropdowns[index]; // Selecciona el elemento dropdown-content específico
    
      wButton.addEventListener('click', function () {
        // Oculta todos los dropdowns
        dropdowns.forEach(function (dropdown) {
          dropdown.style.display = "none";
        });
    
        dpElement.style.display = "block"; // Muestra el dropdown correspondiente
      });
    
      document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
          // Oculta el dropdown si se hace clic fuera del botón y del dropdown correspondiente
          dpElement.style.display = "none";
        }
      });
    });
}


