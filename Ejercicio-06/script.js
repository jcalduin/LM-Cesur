var input = document.querySelector("#nombre");
var boton = document.querySelector("button");
var parrafo = document.querySelector("#respuesta");

function comprobar() {
    if (input.value == ""){
        parrafo.textContent = "El campo esta vacío"
    } else {
        parrafo.textContent = "Valores introducidos correctamente"
    }
}

boton.addEventListener("click",comprobar)