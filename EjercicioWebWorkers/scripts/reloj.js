var reloj = new Date();
var boolPenin = false;

function mostrarHoras() {

    reloj = new Date();

    if (boolPenin)
        reloj.setHours(reloj.getHours() - 1);
    
    self.postMessage(reloj);
    setTimeout("mostrarHoras()", 800);
}

self.onmessage = function (e) {
    if (e.data == "insular") {
        boolPenin = !boolPenin;
    }
}

mostrarHoras();