// chiedere km
var kmPercorrere = prompt('Dimmi i km che devi percorrere');
console.log(kmPercorrere);
kmPercorrere = parseFloat(kmPercorrere);

//chiedere eta
var etaPersona = prompt('Dimmi la tua età');
console.log(etaPersona);

//prezzo biglietto
var prezzoBiglietto = kmPercorrere * 0.21; 
console.log(prezzoBiglietto);

var percent;
console.log(percent);

if ( etaPersona < 18 ) {
    percent = ( prezzoBiglietto *  20 ) / 100;
    prezzoBiglietto = prezzoBiglietto - percent;
} else if ( etaPersona > 65 ) {
    percent = ( prezzoBiglietto *  40 ) / 100;
    prezzoBiglietto = prezzoBiglietto - percent;
}


//mostrare le variabili
document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);