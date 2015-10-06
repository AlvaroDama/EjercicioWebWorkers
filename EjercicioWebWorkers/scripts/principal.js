var reloj;

var iniciaReloj = function() {

    reloj = new Worker("scripts/reloj.js");

    reloj.onmessage = function(e) {
        document.getElementById("hora").innerHTML = e.data.toJSON();
    };
}

iniciaReloj();

//math.random --> hexadecimal (para el color aleatorio de cargar y cambiod e color)