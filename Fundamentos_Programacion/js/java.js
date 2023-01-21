
console.log("HOLA MUNDO");

/*ocument.getElementById("boton").onclick = function() {
    console.log("capturamos el elemento click")
    document.getElementById("boton").innerHTML = "Estamos probando nuestro primer evento en JS";

}
*/
document.getElementById("boton").addEventListener("click",function(){

    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Cambio desde el eventlistener";

})

document.getElementById("botonCambiaColor").addEventListener("click",function(){

    document.body.style.backgroundColor = "white" ;
})
document.getElementById("botonColorDefault").addEventListener("click",function(){

    document.body.style.backgroundColor = "red" ;
})

document.getElementById("botonOcultar").addEventListener("click",function(){

    document.getElementById("demo").style.display = "none" ;
})

const collection = document.getElementsByClassName("prueba");
for (let i = 0 ; i<collection.length; i++){
    collection[i].style.backgroundColor = "green";
}