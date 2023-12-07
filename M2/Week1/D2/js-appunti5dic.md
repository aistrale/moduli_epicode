// tipi di scrittura

// 1. camelCase
testVariable

// 2. snake case
test_variable

// 3. pascal case
TestVariable

// 4. kebab case
test-variable

// sono convenzioni tra sviluppatori. Se uno comincia con un tipo di scrittura, l'altro continuerà con quel codice

// Esistono 3 modi per scrivere una variabile
// 1. codice legacy, che non si usa più: esprimeva una variabile di tipo globale = var ha uno scope (può essere letta e ricercata) dappertutto all'interno del codice
var myVariable = "ciao";

// let è una variabile che può essere riassegnata
let mySecondoVariable = "sono Elena";
mySecondoVariable = "sono Ele";
// se faccio console.log mySecondVariable è "sono Ele", quindi il codice assegnerà quel valore alla variabile

// const = è una variabile che non cambierà la sua assegnazione, ovvero una costante
const myThirdVariable ="ciao";

// console.log serve a far apparire la variabile nel terminale

// tipi di dati che possiamo usare con js
// tipo number
const numberVariable = 5; 

// string
const nameVariable = "testo";

// boolean, molto usata per i confronti
const booleanVariable = true;

// array: una collezione ordinata di dati, che può contenere string, boolean, number, ecc
const arrayVariable = ['stringa', 5, true]
// gli elementi in array hanno un indice che parte da 0
// console.log(arrayVariable.at) 28'

// js è un linguaggio orientato agli oggetti
// oggetto, che all'inizio può essere vuoto.
const myObject = {};
//  contiene delle coppie chiave-valori
// minuto 29-30

// all'interno di un oggetto possiamo usare la dot notation > console.log(product.price)


// FUNZIONI
// un blocco di codice com determinate istruzioni, un algoritmo che dev'essere lanciato.
// esistono due modi di scrivere le funzioni
// 1. il più vecchio
function createText {
    console.log('sono stata eseguita')
}
// all'interno delle graffe c'è la logica da inserire
// le funzioni vanno CHIAMATE / ESEGUITE > chiamare il nome della funzione con le ()
createText()

undefined = variabile dichiarata ma non assegnata a nessun valore
utile per vedere se abbiano ricevuto unj dato in quella variabile oppire se non c'è nulla (minuto 40-42)

una variabile undefined può essere convertita in un NaN (= not a number)

il null è assegnato volutamente dallo sviluppatore e manualmente
null è un oggetto di js
durante le operazioni matematiche, null pèuò essere convertitop in 0 vb