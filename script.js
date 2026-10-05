const boton = document.querySelector(".tarjeta button");
const felicitacion = document.querySelector(".felicitacion");
const recuerdos = document.querySelector(".recuerdos");
const final = document.querySelector(".final");
const sorpresaFinal = document.querySelector(".sorpresa-final");


// PÁGINA 1 → PÁGINA 2
boton.addEventListener("click", function() {

    document.querySelector(".tarjeta").style.display = "none";

    felicitacion.style.display = "block";

  const musica = document.querySelector("#musica");
musica.currentTime = 39;
musica.play();  

});


// PÁGINA 2 → PÁGINA 3
const botonRecuerdos = document.querySelector(".felicitacion button");

botonRecuerdos.addEventListener("click", function() {

    felicitacion.style.display = "none";

    recuerdos.style.display = "block";

});


// PÁGINA 3 → PÁGINA 4
const botonCarta = document.querySelector(".boton-carta");

botonCarta.addEventListener("click", function() {

    recuerdos.style.display = "none";

    final.style.display = "block";

});


// PÁGINA 4 → PÁGINA 5
const botonFinal = document.querySelector(".final button");

botonFinal.addEventListener("click", function() {

    final.style.display = "none";

    sorpresaFinal.style.display = "block";

});