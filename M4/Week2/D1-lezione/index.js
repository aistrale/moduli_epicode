const numeri = [10, 5, 8, 13, 1, 2, 3, 21, 34, 55]

// Desideriamo un array con soltanto i numeri pari -> Utilizziamo un classico for-loop

let numeriPari = []; /* qui andremo a salvare i nostri numeri pari */

for (
    let i = 0; // 1) Inizializzazione variabile indice
    i < numeri.length; // 2) Condizione per l'ingresso nel ciclo
    i++ // 3) Passo (step), che avviene alla fine delle istruzioni nel ciclo, ovvero i = i + 1
 ) {
   console.log(i);

   const numero = numeri[i]; // = il nostro numero all'indice i
   if (numero % 2 === 0) {
     // il nostro numero è pari, quindi possiamo aggiungerlo alla nostra lista
     numeriPari.push(numero);
   }
 }

console.log(numeriPari);



// Con l'introduzione di ES6 abbiamo dei metodi che ci aiutano a snellire il nostro codice

// In questo caso, per filtrare i numeri che, ad esempio, sono pari, possiamo scrivere
const evenNumbers = numeri.filter(function (numero) { // funzione di callback
   return numero % 2 === 0;
 });

 console.log(evenNumbers);
// la funzione di callback deve restituire **vero** oppure **falso**


const numeriDispariMaggioriDi10 = numeri.filter((numero) => numero % 2 === 1 && numero > 10);
//funzione di callback scritta come arrow function; se non ci sono le {} `return` può essere omesso

console.log(numeriDispariMaggioriDi10);



// .forEach
// metodo che consente di andare ad agire ognuno degli elementi dell'array, ovvero esegue la funzione specificata per ognuno degli elementi dell'array.

const risultato = numeri.forEach((numero, indice) => {
   console.table({
     numero,
     indice,
   });
 });

// console.log(risultato); // non ha senso. Il metodo .forEach non restituisce un risultato! troveremo "undefined" in console



// for-of
// Un altro modo di fare un for-loop

for (const numero of numeri) {
   console.log(numero);
}



// .map
// si occupa di trasformare i nostri elementi tramite la funzione di callback. È un metodo che come parametro riceve in ingresso una funzione di trasformazione, che viene applicata ad ognuno degli elementi dell'array. Il `.map()` restituisce un nuovo array
const numeriDoppi = numeri.map(function (numero) {
    return numero * 2 // la callback di .map restituisce gli elementi trasformati (in questo caso moltiplicati per 2)
})
console.log(numeriDoppi)


const fruits = ["apple", "orange", "pear", "peach", "banana", "pineapple"]
// abbiamo un array di frutti e vogliamo trasformarli e farli comparire nella pagina come una lista

const fruitList = document.querySelector("#fruit-list")
const fruitListHTML = fruits.map((fruit) => `<li>${fruit}</li>` /*html*/)
    .join("");
    fruitList.innerHTML = fruitListHTML

console.log(fruitListHTML)



// .join
// se vogliamo unire i nostro elementi
const numeriUnitiDaTilde = numeri.join("~")
console.log(numeriUnitiDaTilde)



// .reduce
// unisce gli elementi dell'array e crea un **valore di ritorno** che deriva dall'"accumulatore". Questo metodo prende come parametro una callback ed eventualmente un numero di inizio. La callback viene eseguita per ogni elemento dell'array
// *accumulatore possiamo anche chiamarlo "valorePrecedente"
const somma = numeri.reduce((accumulatore, numero, index) => {
    return accumulatore + numero // restituisce l'accumulatore più il numero corrente
}, 0)

// recuperare il valore più piccolo dell'array

// In the good ol' way
/* let minValue = numeri[0]
for (let i = 0; i< numeri.length; i++) {
    if (numeri[i]< minValue) {
        minValue = numeri[i]
    }
}
console.log(minValue) */


const minValue = numeri.reduce((valorePrecedente, numero) => {
    if (numero < valorePrecedente) {
        return numero
    } else {
        return valorePrecedente
    }
    // return (numero < valorePrecedente) ? numero : valorePrecedente --> altro modo di scrivere una condizione; se la condizione (`(numero < valorePrecedente)`) è vera, otterremo il valore "dopo" il `?` (otterremo `numero` in questo caso); altrimenti otterremo il valore dopo il `:` (in questo caso `valore precedente`).
})