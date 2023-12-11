/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript.

I principali datatype sono 
- stringhe: parole e frasi inserite tra "" (oppure '')
- numeri
- booleans: valori logici (possono essere solo true e false) che servono quando dobbiamo far applicare la logica al nostro sito
- null: indica che la variabile è stata "svuotata" del suo valore
es.
let myVariable = 1;
zucchero = null


- undefined: indica che c'è una variabile, è stata dichiarata, ma al momento non ho ancora un valore, ad es.
es.
let myVariable;

*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

Un oggetto in JS è un dato strutturale, quindi più complesso rispetto ai dati primitivi come le stringhe, i numeri, ecc. Si tratta di una variabile che, all'interno delle parentesi {}, contiene altre variabili, tutte riferite però alla variabile iniziale.
es.

let myVariable {
    name: "Elena";
    age: 29;
    nationality: "Italian"
    job: "Student";
}

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

let number1 = 12;
let number2 = 20;
console.log (number1 + number2)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.

let x = 12;
 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

 let name = "Elena";
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

let x = 12;
let result = 4 -x;

 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = "john";
let name2 = "John";

per verificare la disuguaglianza con operatore !==
console.log(name1 !== name2)
la console restituirà "true"

per verificare che invece le due variabili siano uguali tramite l'operatore === bisognerà trasformare con il metodo .toLowerCase()
console.log(name1.toLowerCase() === name2.toLowerCase())
*/

/*

Crea un'oggetto di JS che ti rappresenti

let myself {
    name = "Elena";
    surname = "Beghetto";
    age = 29;
    hobby1 = "coding";
    hobby2 = "translation";
}


*/