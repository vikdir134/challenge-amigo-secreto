// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos una lista que reciba los nombres de los amigos
let amigos = [];
// funcion para limpiar caja
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
//Asignar texto por id
function asignarTextoId(id,texto){
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
}
// funcion para agregar amigo, donde incluimos la validacion de nombre repetido y el limpiar caja
function agregarAmigo(){
    nombre=document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Porfavor, ingrese un nombre.");
        return;
    }
    else if (amigos.includes(nombre)){
        alert("El nombre ya esta incluido en la lista. Porfavor, ingrese un nombre diferente.");
        limpiarCaja();
        return;
    }
    else {
        amigos.push(nombre);
        limpiarCaja();
        console.log(amigos);
    }
    asignarTextoId("listaAmigos", amigos.join("<br>"));//Colocamos <br> para que se muestre en lineas diferentes
    asignarTextoId("resultado", "");//Si despues de generar el amigo secreto se quiere volver a sortear, se limpia el resultado anterior
}
//funcion para sortear amigos
function sortearAmigo() {
    numeroAleatorio = Math.floor(Math.random() * amigos.length);
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Porfavor, agregue amigos a la lista.");
        return;
    }
    console.log("El numero aleatorio es: " + numeroAleatorio);
    console.log("El amigo sorteado es: " + amigos[numeroAleatorio]);
    //asignarTextoId("amigoSorteado", amigos[numeroAleatorio]);
    asignarTextoId("resultado", "El amigo sorteado es: " + amigos[numeroAleatorio]);
    asignarTextoId("listaAmigos", "");//Se limpia la lista de amigos mostrada en pantalla
}
