var input = document.querySelector("#texto");
var boton = document.querySelector("#boton");
var resultado = document.querySelector("#resultado");

function imprimir() {
    resultado.textContent = input.value;
}

boton.addEventListener("click",imprimir);