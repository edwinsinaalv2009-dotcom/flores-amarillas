/* =====================================
   CORAZONES
===================================== */

const contenedorCorazones =
    document.querySelector(".corazones");


function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazon");


    // Tamaño aleatorio

    const tamaño =
        Math.random() * 15 + 10;

    corazon.style.width =
        `${tamaño}px`;

    corazon.style.height =
        `${tamaño}px`;


    // Posición

    corazon.style.left =
        `${Math.random() * 100}%`;


    // Duración

    const duracion =
        Math.random() * 6 + 5;

    corazon.style.animationDuration =
        `${duracion}s`;


    // Retraso

    corazon.style.animationDelay =
        `${Math.random() * 2}s`;


    contenedorCorazones.appendChild(corazon);


    // Eliminar después de la animación

    setTimeout(() => {

        corazon.remove();

    }, (duracion + 3) * 1000);
}


/* Crear corazones continuamente */

setInterval(crearCorazon, 500);


/* Crear algunos inmediatamente */

for (let i = 0; i < 12; i++) {

    setTimeout(
        crearCorazon,
        i * 250
    );
}


/* =====================================
   ESTRELLAS
===================================== */

const contenedorEstrellas =
    document.querySelector(".estrellas");


function crearEstrella() {

    const estrella =
        document.createElement("div");

    estrella.classList.add("estrella");


    estrella.style.left =
        `${Math.random() * 100}%`;

    estrella.style.top =
        `${Math.random() * 100}%`;


    const tamaño =
        Math.random() * 4 + 2;

    estrella.style.width =
        `${tamaño}px`;

    estrella.style.height =
        `${tamaño}px`;


    estrella.style.animationDelay =
        `${Math.random() * 3}s`;


    contenedorEstrellas.appendChild(
        estrella
    );
}


/* Crear estrellas */

for (let i = 0; i < 70; i++) {

    crearEstrella();
}


/* =====================================
   CARTA
===================================== */

const botonAbrir =
    document.getElementById("abrirCarta");

const botonCerrar =
    document.getElementById("cerrarCarta");

const carta =
    document.getElementById("carta");


/* Abrir */

botonAbrir.addEventListener(
    "click",
    () => {

        carta.classList.add("mostrar");

    }
);


/* Cerrar */

botonCerrar.addEventListener(
    "click",
    () => {

        carta.classList.remove("mostrar");

    }
);


/* Cerrar al tocar fuera de la carta */

carta.addEventListener(
    "click",
    (evento) => {

        if (evento.target === carta) {

            carta.classList.remove("mostrar");

        }

    }
);


/* =====================================
   TECLA ESC
===================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key === "Escape") {

            carta.classList.remove("mostrar");

        }

    }
);