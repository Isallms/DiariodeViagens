let curtidas = 0;


// muda o título
function mudarTitulo() {

document.querySelector(".header__conteudo h1").innerText =
"Diário de Viagem da Isabelle 🌴";

}


// botão de curtir
function curtirViagem(){

curtidas++;

document.getElementById("contadorCurtidas").innerText =
"Curtidas: " + curtidas;

}


// aumentar imagem
function destacarFoto(img){

img.style.transform = "scale(1.1)";

}


// voltar imagem
function voltarFoto(img){

img.style.transform = "scale(1)";

}


// evento quando página abre
window.onload = function(){

alert("Bem-vindo ao meu Diário de Viagem!");

}