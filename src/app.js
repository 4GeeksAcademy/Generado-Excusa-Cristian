import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function () {
  const randomNum = (array) => {
    let random = Math.floor(Math.random() * array.length)
    return array[random];
  }

  const concatenar = () => {
    let excuse = `${randomNum(who)} ${randomNum(action)} ${randomNum(what)} ${randomNum(when)}`;
    return excuse;
  }

  console.log(concatenar())

  document.getElementById(`excuse`).innerHTML = concatenar();

  document.getElementById(`buttonGenerator`).addEventListener(`click`, () =>{
    document.getElementById(`excuse`).innerHTML = concatenar();
  })
};