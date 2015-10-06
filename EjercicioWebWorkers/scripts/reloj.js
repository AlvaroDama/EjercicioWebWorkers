var reloj = new Date();
var boolPenin = undefined;

function mostrarHoras() {

    reloj = new Date();

    if (boolPenin)
        reloj.setHours(reloj.getHours() - 1);
    
    self.postMessage(reloj);
    setTimeout("mostrarHoras()", 1000);
}

self.onmessage = function (e) {
    if (e.data == "insular") {
        if (!boolPenin)
            boolPenin = "true";
        else
            boolPenin = undefined;
    }
}

mostrarHoras();