var cuadrado = document.getElementById("cuadrado");
var boton = document.querySelector("button");

function cambiarColor () {
    cuadrado.classList.toggle("color")
}

boton.addEventListener("click",cambiarColor);