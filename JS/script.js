const numeroChilometri = prompt( 'inserisci il numero di chilometri' );
const etàPasseggero = prompt( 'inserisci età passeggero' );
const prezzoAlChilometro = 0.21 ;
let prezzoTotale;



console.log(numeroChilometri);
console.log(etàPasseggero);
console.log(prezzoAlChilometro);


if(etàPasseggero < 18){
  prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.8)
}else if(etàPasseggero > 65){
  prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.6)
}else {
  prezzoTotale= (numeroChilometri*prezzoAlChilometro)
}

console.log(prezzoTotale);

document.getElementById('output').innerHTML +=  prezzoTotale.toFixed(2) + '€';