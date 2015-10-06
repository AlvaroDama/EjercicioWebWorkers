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

function para() {
    reloj.terminate();
    reloj = undefined;
}

function reinicia() {
    if (!reloj)
        iniciaReloj();
}

function cambia() {
    reloj.postMessage("insular");
    contador += contador;
    if (contador % 2 == 0)
        document.getElementById("insular").innerHTML = "Insular";
    else
        document.getElementById("insular").innerHTML = "Peninsular";
}

iniciaReloj();
document.getElementById("insular").addEventListener("click", cambia);
document.getElementById("para").addEventListener("click", para);
document.getElementById("inicia").addEventListener("click", reinicia);


function formateaHora(dato) {
    return dato<10?"0"+dato:dato;
}
//math.random --> hexadecimal (para el color aleatorio de cargar y cambiod e color)