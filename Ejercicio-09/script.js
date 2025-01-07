//creo una lista con las imagenes del carrusel
var imagenes = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
    "https://picsum.photos/200?5",
    "https://picsum.photos/200?6"
];
//creo una variable indice que me permitira jugar con el indice del array
var indice = 0;
//inicializo los elementos necesarios para realizar el efecto
var imgPrincipal = document.querySelector("img");
var botonAnterior = document.querySelector("#anterior");
var botonSiguiente = document.querySelector("#siguiente");

//creo una función principal donde igualo la url de la imagen a la url de una de las imagenes de lista anteriormente creada
//hay 6 imagenes en el array desde la posición 0 a la 5. por eso indice se inicializa en 0 cuyo url es el mismo
//que el de la imagen principal contenida en el html
function principal() {
    imgPrincipal.src = imagenes[indice];
}

//creo una funcion anterior que me permite retrodecer en el indice del array. Este selecciona la imagen anterior dentro contenida en mi array
function anterior() {
// ejemplo: empiezo con indice 0 -1 + 6 (longitud de mi Array) =5 ; que si lo divido entre la longitud del array (6) 5%6 el resto sera 5
// por lo tanto indice valdra ahora 5
    indice = (indice - 1 + imagenes.length) % imagenes.length;
// llamo a la funcion anteriormente creada "principal" que seleccinara la nueva url (en este caso la posición 5) dentro de mi lista imagenes
    principal();
}

//creo una funcion que me permite avanzar en el indice del array. Este selecciona la siguiente imagen dentro de mi array:
function siguiente() {
// ejemplo estabamos en el indice 5 + 1 % 6 (longitud de mi array) cuyo resto en este caso 6%6 = 0. Indice ahora vale 0
    indice = (indice +1) %imagenes.length;
//llamo a la funcion principal que selecciona la url en el indice  dentro de mi array imagenes en este caso la posicion 0 de nuevo. 
    principal();
}

//creo un evento que al hacer click sobre los respectivos botones llama a susrespectivas funciones
botonAnterior.addEventListener("click",anterior);
botonSiguiente.addEventListener("click",siguiente);

//se vuelve a llamar a la funcion principal para que el indice se actualice tras llmar al evento.
//de lo contrario el indice sería siempre cero
principal();