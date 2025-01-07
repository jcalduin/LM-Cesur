var parrafo1 = document.querySelector("p");
var boton1 = document.querySelector("button");
var parrafo2 = document.querySelector("#parrafo");
var boton2 = document.querySelector("#boton2")

function cambiar() {
    parrafo1.textContent = "Texto cambiado";
}

function cambio2() {
    if (parrafo2.textContent == "Texto original") {
        parrafo2.textContent = "Texto cambiado"
    } else {
        parrafo2.textContent = "Texto original"
    }
}

boton1.addEventListener("click",cambiar);
boton2.addEventListener("click",cambio2);