import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi loro', 'Mi hermano pequeño', 'Mi jefe'];
let action = ['se comió', 'se meó sobre', 'rompió', 'perdió', 'quemó', 'tiró por la ventana'];
let what = ['mis deberes', 'mi teléfono', 'el coche', 'mi ordenador', 'mi cuaderno', 'mi merienda'];
let when = ['antes de clase', 'mientras dormía', 'cuando estaba en el trabajo', 'durante el partido', 'esta mañana', 'durante la tormenta'];

window.onload = function () {

};
const randomNum = (array) => {
  let random = Math.floor(Math.random() * array.length)
  return array[random];
}

const concatenar = () => {
  const checkWho = document.getElementById('who').checked;
  const checkAction = document.getElementById('action').checked;
  const checkWhat = document.getElementById('what').checked;
  const checkWhen = document.getElementById('when').checked;

  let fraseFinal = [];

  if (checkWho) {
    fraseFinal.push(randomNum(who));
  }
  if (checkAction) {
    fraseFinal.push(randomNum(action));
  } if (checkWhat) {
    fraseFinal.push(randomNum(what));
  }
  if (checkWhen) {
    fraseFinal.push(randomNum(when));
  }

  if (fraseFinal.length === 0) {
    return 'Selecciona al menos alguna categoría para generar una excusa';
  }

  return fraseFinal.join(' ');


  /*let excuse = `${randomNum(who)} ${randomNum(action)} ${randomNum(what)} ${randomNum(when)}`;
  return excuse;*/
}

console.log(concatenar())

document.getElementById(`excuse`).innerHTML = concatenar();

document.getElementById(`buttonGenerator`).addEventListener(`click`, () => {
  document.getElementById(`excuse`).innerHTML = concatenar();
})