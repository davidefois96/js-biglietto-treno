const numeroChilometri = prompt( 'inserisci il numero di chilometri' );
const etàPasseggero = prompt( 'inserisci età passeggero' );
const prezzoAlChilometro = 0.21 ;
let prezzoTotale;



console.log(numeroChilometri);
console.log(etàPasseggero);
console.log(prezzoAlChilometro);


if(etàPasseggero < 18){
  prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.8).toFixed(2)
}else if(etàPasseggero > 65){
  prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.6).toFixed(2)
}else {
  prezzoTotale= (numeroChilometri*prezzoAlChilometro).toFixed(2)
}

console.log(prezzoTotale);

document.getElementById('output').innerHTML +=  prezzoTotale + '€';