const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [45, 5, 25]
const shippingCost = 50


let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!
// ———————————————————————————————

let sommaCarrello = 0;
for (let i = 0; i < prices.length; i++) {
  const prezzo = prices[i]
  sommaCarrello += prezzo
}

console.log("Ciao! Ora il tuo carrello è di: " + "€" + sommaCarrello);
if (utenteCheEffettuaLAcquisto.isAmbassador){
  (sommaCarrello * 30) / 100;
  console.log("Complimenti, abbiamo applicato lo sconto del 30%! Ora il totale è di: " + "€" + sommaCarrello);
}

if (sommaCarrello <= 100){
  sommaCarrello += shippingCost;
  console.log("Abbiamo applicato al tuo carrello le spese di spedizione del costo di: " + "€" + shippingCost );
}

let utenti = [];
utenti.push(marco, paul, amy);

for (let i = 0; i < utenti.length; i++) {
  let utente = utenti[i];
  let nomeEcognome = `${utente.name} ${utente.lastName}`;
  if (utente.isAmbassador){
console.log(nomeEcognome + " è un ambassador" );
  } else{
console.log(nomeEcognome + " non è un ambassador");
  }
}

let ambassador = [];
for (let i = 0; i < utenti.length; i++) {
  let utente = utenti[i];
  if (utente.isAmbassador){
  ambassador.push(utente)    
  }
}
console.log(ambassador);