let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', "ABIDE", "ABUSE", "ADMIT", "ADORE", "AGREE", "ALLOW",
    "AWAKE", "BLEED", "BLESS", "BRAKE", "BLINK", "CARRY", "CATCH", "CAUSE", "CHOKE", "CLEAN", "CLAIM", "CROSS",
    "DANCE", "DRINK", "DREAM", "EJECT", "EXIST", "FOUND", "GRADE", "GUESS", "JUDGE", "LEARN", "LOWER", "MOUNT", "PLACE",
    "RAISE", "RHYME", "SCREW", "SMELL", "TASTE", "TRADE", "UPSET", "WASTE", "WRITE", "WATER"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
window.addEventListener('load', init)
function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
const valor = input.value;

function intentar() {
    const INTENTO = leerIntento();
    if (!INTENTO) {
        return;
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos === 0 || INTENTO === palabra) {
        terminar(INTENTO === palabra ? "<h1>GANASTE!</h1>" : "<h1>PERDISTE!</h1>");
    }
}
function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}