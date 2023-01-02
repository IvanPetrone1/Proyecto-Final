
//Eventos para mostrar la informacion:
 MostrarCelular();
 MostrarNombreApellido();
 MostrarFechaNacimiento();
 MostrarEmail();
 MostrarDireccion();

function MostrarCelular(){

    document.getElementById("celular").addEventListener("click",function(){
        document.getElementById("descripcion").innerHTML = "Mi numero de celular es (586) 240-8787";
    })
}

function MostrarNombreApellido(){

    document.getElementById("nombreapellido").addEventListener("click",function(){
        document.getElementById("descripcion").innerHTML = "Hola, mi nombre es Sergio Mckinney";
    })

}

function MostrarFechaNacimiento(){

    document.getElementById("fechanacimiento").addEventListener("click",function(){
        document.getElementById("descripcion").innerHTML = "Mi cumpleaños es el 6/6/1984";
    })

}

function MostrarEmail(){

    document.getElementById("email").addEventListener("click",function(){
        document.getElementById("descripcion").innerHTML = "Mi correo es sergio.mckinney@example.com";
    })

}

function MostrarDireccion(){

    document.getElementById("direccion").addEventListener("click",function(){
        document.getElementById("descripcion").innerHTML = "Mi direccion es 4868 Edwards Rd";
    })

}