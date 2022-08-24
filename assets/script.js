// 1) Cambiar el texto del Login a Logout cuando se haga click en el button
function turnLogOut(element) {
    element.innerText = "Logout";
}
// 2) Remover el boton agregar definicion cuando se hace click en el
function ocultar(element) {
    element.remove();
}
// 3) Alerta en el boton  de likes  
function likeMessageOne() {
    alert("Ninja was liked");
}
//A este le di otra variante para que les cambiara el texto de botón a un like más, no funciona agregando más, aun falta por aprender eso
function likeMessageTwo(element) {
    alert("Ninja was liked");
    element.innerText = "38 Likes";
}