var principal = document.querySelector("#imgPrincipal");
var imagen1 = document.querySelector("#img1");
var imagen2 = document.querySelector("#img2");
var imagen3 = document.querySelector("#img3")

function cambiarImagen1() {
    principal.src = imagen1.src;
    imagen1.classList.add("borde");
    imagen2.classList.remove("borde");
    imagen3.classList.remove("borde");
}

function cambiarImagen2() {
    principal.src = imagen2.src;
    imagen2.classList.toggle("borde");
    imagen1.classList.remove("borde");
    imagen3.classList.remove("borde");
}

function cambiarImagen3() {
    principal.src = imagen3.src;
    imagen3.classList.toggle("borde");
    imagen2.classList.remove("borde");
    imagen1.classList.remove("borde");
}

imagen1.addEventListener("click",cambiarImagen1);
imagen2.addEventListener("click",cambiarImagen2);
imagen3.addEventListener("click",cambiarImagen3);