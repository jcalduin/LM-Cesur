//selecciono un elemento en concreto que será el id de la imagen principal
var imgPrinciapl = document.querySelector("#imgPrincipal");
//selecciono todos los elementos con la clase miniatura creando una lista de estos elementos
var galeria = document.querySelectorAll(".miniatura");

//Creo la funcion cambiarImagen la cual recibe como parametro el evento "cambio" 
function cambiarImagen(cambio) {
    //por cada imagen dentro de la lista galeria quito la clase borde
    galeria.forEach(img => img.classList.remove("borde"));
    //cambia la url de la imagen principal a aquella sobre la que clico o hago"target"
    imgPrinciapl.src = cambio.target.src;
    // añade la clase borde a la imagen sobre la que clico
    cambio.target.classList.add("borde")
}

//por cada imagen dentro de la lista galeria añade un evento que al hacer click aplique la funcion cambiarImagen
galeria.forEach(img => img.addEventListener("click",cambiarImagen));