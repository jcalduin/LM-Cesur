var parrafo = document.querySelector("#ocultar");
var enlace = document.querySelector("a");

function ocultar() {
    parrafo.classList.toggle("oculto");
    enlace.textContent = (enlace.textContent == "Ocultar") ? "Mostrar" : "Ocultar";
}

enlace.addEventListener("click",ocultar);