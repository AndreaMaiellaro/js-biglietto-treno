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
    var prezzoBiglietto = parseFloat(prezzoKm - percent).toFixed(2);
} else if ( etaPersona > 65 ) {
    var percent = ( prezzoKm *  40 ) / 100;
    var prezzoBiglietto = parseFloat(prezzoKm - percent).toFixed(2);
} else {
    var prezzoBiglietto = parseFloat(prezzoKm).toFixed(2);
}

//parseFloat(num).toFixed(2);


//mostrare le variabili
document.getElementById('prezzo').innerHTML = prezzoBiglietto;