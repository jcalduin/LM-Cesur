var fondo = document.querySelector("body");
var boton = document.querySelector("button")

function cambiarcolor() {
    fondo.classList.toggle("color")
}

boton.addEventListener("click",cambiarcolor)