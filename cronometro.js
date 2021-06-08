"use strict"

// alert();

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000; //quantos milesimos valem 1 segundo?
let cronometro;

//quando aperta o botao iniciar!!!
function start() {
  cronometro = setInterval(() => { timer(); }, tempo);
}

//quando aperta o botao pause!!!
function pause() {
  clearInterval(cronometro);
}

//quando aperta o botao parar!!!
function stop() {
  clearInterval(cronometro);
  hh = 0;
  mm = 0;
  ss = 0;  
}

//
function timer() {
  ss++;

  if(ss == 60) {
    ss = 0;
    mm++;
    if(mm == 60) {
      mm = 0;
      hh++;
    }
  }

  let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  document.getElementById('counter').innerHTML = format;
}