let boton = document.getElementById("saludarBtn");

document.addEventListener("DOMContentLoaded", function() {  
  boton.removeAttribute('onclick');
    boton.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
  });