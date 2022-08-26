var jugador = document.getElementById("jugador");
var enemigo = document.getElementById("enemigo");

var iniciar = false;

function saltar() {
    if (jugador.classList != "animar") {
        jugador.classList.add("animar");
    }
    if (!iniciar) {
        enemigo.classList.add("vel");
        iniciar = true;
        document.getElementById("anuncioJuego").innerHTML = "";
    }

    setTimeout(() => {
        jugador.classList.remove("animar");
    }, 700);

}

var perdiste = setInterval(() => {
    var jugadorTop = parseInt(
        window.getComputedStyle(jugador).getPropertyValue("top")
    );
    var jugadorLeft = parseInt(
        window.getComputedStyle(jugador).getPropertyValue("left")
    );
    var enemigoLeft = parseInt(
        window.getComputedStyle(enemigo).getPropertyValue("left")
    );

    if ((enemigoLeft >= jugadorLeft && enemigoLeft <= jugadorLeft + 60) && jugadorTop == -140) {
        enemigo.classList.remove("vel");
        iniciar = false;

        document.getElementById("anuncioJuego").innerHTML = "Perdiste";
    }
}, 10);