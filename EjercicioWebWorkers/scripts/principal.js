var reloj;
var contador = 1;

var iniciaReloj = function() {

    reloj = new Worker("scripts/reloj.js");

    reloj.onmessage = function(e) {
        document.getElementById("hora").innerHTML = formateaHora(e.data.getHours());
        document.getElementById("mins").innerHTML = formateaHora(e.data.getMinutes());
        document.getElementById("secs").innerHTML = formateaHora(e.data.getSeconds());
    }
}

//Error al parar y luego iniciar: el reloj se restablece a peninsular.
function para() {
    reloj.terminate();
    reloj = undefined;
}

function inicia() {
    if (!reloj) {
        iniciaReloj();
        reloj.postMessage("insular");
    }
        
}

function cambiaHora() {
    var boton = "<button type='button' id='insular'>";

    reloj.postMessage("insular");
    
    if (contador % 2 == 0) {  
        boton+="Insular</button>";
    } else {  
        boton+="Peninsular</button>";
    }

    contador += 1;

    document.getElementById("insular").outerHTML = boton;
    document.getElementById("insular").addEventListener("click", cambiaHora);
}

function cambiaColor() {

    var num = 0;
    var hexa = "#";

    for (var i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 16).toString(16);
        hexa += num;
    }
    
    document.getElementById("reloj").setAttribute("style", "color:" + hexa + ";");
}

iniciaReloj();
cambiaColor();
document.getElementById("insular").addEventListener("click", cambiaHora);
document.getElementById("para").addEventListener("click", para);
document.getElementById("inicia").addEventListener("click", inicia);
document.getElementById("color").addEventListener("click", cambiaColor);

function formateaHora(dato) {
    return dato<10?"0"+dato:dato;
}
