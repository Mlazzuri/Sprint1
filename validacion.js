//Haz tú validación en javascript acá

const btnenviar =document.getElementsByClassName("formcontato__botao");
const nombreUsuario = document.getElementsByName("nombre");
const emailusuario =document.getElementsByName("email");
const asuntousuario =document.getElementsByName("asunto");

if (nombreUsuario.length < 6) {
    console.log("hola");
}