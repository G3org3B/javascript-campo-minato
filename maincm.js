
// l computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// creare array e  fuction per generare 16 n casuali da 1 a 100 vietati

var numeriVietati = [];

function numbRandom(max, min) {

  var numeroR = Math.floor(Math.random()*(max - min + 1) + min);

  return numeroR;

}
console.log(numeriVietati);


// Creiamo il prompt dove l'utente inserirà i numeri da confrontare con quelli vietati


for (var i = 0; i < 16; i++) {

  var numeroVietato = numbRandom(1, 100);

  numeriVietati.push(numeroVietato);
  console.log(numeroVietato);
  console.log(numeriVietati);
}



var nUtente = [];

var numeroScelto = parseInt(prompt("inserire un numero da 1 a 100"));

nUtente.push(numeroScelto);

for (var i = 0; i < nUtente.length; i++) {
    nUtente[i];
}


// Confronto numeri utente con quelli vietetati e eventuale evento in base al risultato

var numero_trovato = false;

var i = 0 ;

while (!numero_trovato && i < 84) {

  if (numeroVietato == numeroScelto) {

    numer_trovato = true;

    alert("Hai perso il tuo punteggio è Punteggio :" + arrayUtente.length);
  }
  else {
    prompt("Continuare");
  }
  i++;
}
