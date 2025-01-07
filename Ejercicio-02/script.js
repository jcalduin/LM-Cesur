var imagen1 = document.querySelector("img#imagen1");
var imagen2 = document.querySelector("img#imagen2");
var boton = document.querySelector("button");

function cambiar() {
    imagen1.classList.toggle("cambio");
    imagen2.classList.toggle("cambio");
}

boton.addEventListener("click",cambiar);