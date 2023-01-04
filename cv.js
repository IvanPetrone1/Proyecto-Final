fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let userdata = data.results[0];
            console.log(userdata);
            let cell = userdata.cell;
            let name = userdata.name.first +" " + userdata.name.last ;
            let datebt = userdata.registered.date;
            let email = userdata.email;
            ObtenerCelular(cell);
            ObtenerNombreApellido(name);
            ObtenerFechaNacimiento(datebt);
            ObtenerEmail(email);
        })
        
function ObtenerCelular(data){

    document.getElementById("celular").addEventListener("click",function(){
        console.log("funciono");
        document.getElementById("demo").innerHTML = "Mi numero de celular es: "+data;
    })
}

function ObtenerNombreApellido(name){

    document.getElementById("nombreapellido").addEventListener("click",function(){
        console.log("funciono");
        document.getElementById("demo").innerHTML = "Hola, mi nombre es:"+name;
    })

}

function ObtenerFechaNacimiento(fecha){

    document.getElementById("fechanacimiento").addEventListener("click",function(){
        console.log("funciono");
        document.getElementById("demo").innerHTML = "Mi cumpleaños es el: " + SoloFecha(fecha);
    })

}

function SoloFecha(fecha){

    let i = 0;
    let nuevafecha = "";
    while(fecha[i] != "T"){
        
        if(fecha[i] == "-"){

            console.log("PASO POR ACA");
            nuevafecha += '/';
        }else{
            nuevafecha += fecha[i];
        }

        i++;
    }
    return nuevafecha;
}

function ObtenerEmail(email){

    document.getElementById("email").addEventListener("click",function(){
        console.log("funciono");
        document.getElementById("demo").innerHTML = "Mi correo es: " + email;
    })

}