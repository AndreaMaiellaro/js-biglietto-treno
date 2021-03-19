// chiedere km
var kmPercorrere = prompt('Dimmi i km che devi percorrere');
console.log(kmPercorrere);

//chiedere eta
var etaPersona = prompt('Dimmi la tua età');
console.log(etaPersona);

//prezzo biglietto
var prezzoKm = ( kmPercorrere *  0.21 )
console.log(prezzoKm)

var prezzoBiglietto;
console.log(prezzoBiglietto)

var percent;
console.log(percent)

if ( 18 > etaPersona ) {
    var percent = ( prezzoKm *  20 ) / 100;
    var prezzoBiglietto = prezzoKm - percent;
} else if ( etaPersona > 65 ) {
    var percent = ( prezzoKm *  40 ) / 100;
    var prezzoBiglietto = prezzoKm - percent;
} else {
    var prezzoBiglietto = prezzoKm;
}


//mostrare le variabili
document.getElementById('prezzo').innerHTML = prezzoBiglietto;