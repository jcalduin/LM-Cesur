var nombre = document.querySelector("#nombre");
var correo = document.querySelector("#correo");
var mensaje = document.querySelector("#mensaje");
var boton = document.querySelector("button");
var errorNombre = document.querySelector("#errorNombre");
var errorCorreo = document.querySelector("#errorCorreo");
var errorMensaje = document.querySelector("#errorMensaje");

function comprobar() {
    if (nombre.value == ""){
        errorNombre.textContent = "Olvidaste introducir tu nombre"
    } else {
        errorNombre.style.display = "none";
      }

    if (correo.value == "") {
        errorCorreo.textContent = "Olvidaste tu correo"
    } else if (!correo.value.includes("@")) {
        errorCorreo.textContent = "Formato no válido"
    } else {
        errorCorreo.style.display = "none"
    }

    if (mensaje.value == "") {
        errorMensaje.textContent = "Olvidaste el mensaje"
    } else {
        errorMensaje.style.display = "none"
    }
}

boton.addEventListener("click",comprobar);