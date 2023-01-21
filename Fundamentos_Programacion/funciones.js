


document.getElementById("sumar").addEventListener("click",function(){

    let x = document.getElementById("numero1").value;
    console.log(x);
    let y = document.getElementById("numero2").value;
    console.log(y);
    let z= sumar(parseInt(x),parseInt(y));
    console.log(z);
    document.getElementById("resultado").innerHTML= z;
    document.getElementById("contenedorResultado").style.display= "block";
});

function sumar(a,b){
    return a+b;
}