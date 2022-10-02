

let vidaPikachu = 100;
let vidaCharmander = 100;

const ataquePi = 25;
const ataqueCh = 30;



let turno = prompt(
  "Elige un turno: 1 (turno de Charmander) o 2 (Turno de Pikachu)");

switch (turno) {

  case 1:
    ataqueCharmander();
    break;

  case 2:
    ataquePikachu();
    break;

  default:
    error();
};


function ataqueCharmander() {
   vidaPikachu = vidaPikachu - ataqueCh;
  if (vidaPikachu > 0) {
    turno = prompt(
      `Charmander a usado Lanzallamas, la nueva vida de Pikachu es de: ${vidaPikachu}, elige otro turno: 1 o 2`
    );
    while (turno > 2 || turno < 1 || isNaN(turno)) {
      turno = prompt("No existe ese turno, elige el turno: 1 (turno de Charmander) o 2 (Turno de Pikachu)")};
    if (turno == 1) {
      ataqueCharmander();
    } else {
      ataquePikachu();
    }
  } else {
    alert("Pikachu a perdido toda la vida, Charmander es el ganador");
  }
}

function ataquePikachu() {
   vidaCharmander = vidaCharmander - ataquePi;
  if (vidaCharmander > 0) {
    turno = prompt(`Pikachu a usado Voltio Cruel, la nueva vida de Charmander es de: ${vidaCharmander}, elige otro turno: 1 o 2`);
    while (turno > 2 || turno < 1 || isNaN(turno)) {
      turno = prompt("No existe ese turno, elige el turno: 1 (turno de Charmander) o 2 (Turno de Pikachu)")};
    if (turno == 2) {
      ataquePikachu();
    } else {
      ataqueCharmander();
    }
  } else {
    alert("Charmander a perdido toda la vida, Pikachu es el ganador")};
}

function error() {
    while (turno > 2 || turno < 1 || isNaN(turno)) {
           turno = prompt ('Diste un turno incorrecto, elige el turno: 1 (turno de Charmander) o 2 (Turno de Pikachu)')
        } if (turno == 1) {
            ataqueCharmander();
        } else {
            ataquePikachu();
        }
}


