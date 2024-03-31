// Destrutturazione sugli oggetti [object destructuring]
// destrutturiamo il valore dall'oggetto car
const car = {
    make: "Porsche",
    model: "Cayman S",
    year: 2020,
    plate: "R98713",
    variant: "GCC"
}

// dobbiamo andare a recuperare alcuni dati dall'oggetto, ad es.
/* const model = car.model
const year = car.year */
// altro modo per scrivere la stessa cosa è
const { model, year } = car
// con le {} andiamo a indicare che la variabile `model` dev'essere inizializzata con lo stesso valore che troviamo dentro la costante `car`
// l'operatore di destrutturazione possiamo immaginarlo come una "estrazione" del modello e dell'anno (le **chiavi**) dall'oggetto "car".

// Se per errore destrutturassimo qualcosa che non c'è, ci aspettiamo che `variant` sia `undefined`
// const { variant } = car // posso scriverlo anche come const variant = car.variant

// Qualora dovessimo sfortunatamente avere una variabile nel medesimo *scope* che non possiamo sovrascrivere
const variant = ["GCC", "EURO", "AMERICAN"]
// possiamo in tal caso rinominare i valori destrutturati con questa sintassi
const { variant: carVariant } = car // che è esattamente come scrivere `const carVariant = car.variant`
// in questo caso `carVariant` è una variabile a sé




console.log(Object.keys(car)) // ci va a restituire un array con tutte le chiavi di `car`
console.log(Object.values(car)) // ci va a restituire un array con tutti i valori di `car`
console.log(Object.entries(car)) // ci va a restituire un array di array con tutte le chiavi e i valori di `car`

// la possibilità di andare a destrutturare dentro una funzione, ovvero direttamente dentro ai parametri
Object.entries(car)
    .forEach(([key, value] /* stiamo destrutturando il parametro */, index) => {
        const [key, value] = keyAndValue // const [key, value] = [ 'make', 'Porsche' ]
         console.log(index, key, value)
})




// Destrutturazione sugli array [array destructuring]
const fruits = ["🍌", "🍊", "🍎"]

// Possiamo andare a definire delle variabili utilizzando la destrutturazione su un array, ovvero con questa sintassi:
const [banana, orange, apple] = fruits

// Questo è esattamente come scrivere:
/* const banana = fruits[0]
const orange = fruits[1]
const apple = fruits[2] */

// Se vogliamo indicare solo due frutti
/* const [banana, , apple] = fruits
console.log(banana, apple) */



// Object spreading

const obj1 = {
    name: "John",
    age: 30
}

const obj2 = {
    name: "Rambo",
    gender: "M"
}

// in obj3 abbiamo: 
const obj3 = {
    ...obj1, // la destruttura di obj1, ovvero { name: 'John', age: 30 }
    ...obj2, // la destruttura di obj1, ovvero { name: 'Rambo', gender: 'M' }
    phone: "+1-555-1234"
}

console.log(obj1)
console.log(obj2)
console.log(obj3) // nella console avremo TUTTI i campi; per i campi uguali, come name, prevale l'ulimo che viene specificato (come CSS, a cascata)

// lo scopo principale di spreading è assegnare / diffondere ciascuna delle chiavi-valori che sono negli altri oggetti

const dbUser = { name: 'Rambo', age: 30, gender: 'M', phone: '+1-555-1234' }

const dtoUser = {
    gender: 'F'
}

const newUser = {
    ...dbUser, // lo spread dell'utente sul database
    ...dtoUser, // andiamo a sovrascrivere l'update
}

console.log(newUser)

// Array spreading

const myString = "Hello World"

const characters = [...myString] 
console.log(characters); // crea un array con tutti i caratteri
console.log(characters[0]); // all'indice 0 avremo "h"

// possiamo andare a recuperare tutti gli altri caratteri utilizzando lo spread operatore SULLA destrutturazione
const [firstChar, secondChar, thirdChar, ...allOtherCharacters] = [...myString]
console.log(allOtherCharacters) // contiene tutti i caratteri rimanenti (quindi non "h", "e", "l")



// Parameters spreading
function sum(...numbers) {
    console.log(numbers)
    return numbers.reduce((a, b) => a + b) // in questo caso .reduce() restituisce la somma
}
// il parametro di somma non è determinato
console.log(sum(1, 2, 3, 45, 6, 7)) // ci ritroviamo tutti i numeri in un array



// .find()
// Il metodo .find() è un filtro che restituisce il primo risultato

const numbers = [1, 2, 3, 4, 5, 6]

// Andiamo a "pescare" il primo numero pari
console.log(numbers.find(
    // Al solito, ci troviamo la funzione di callback da definire
    function (number) {
        // se la funzione restituisce `true`, allora .find() restituisce questo numero
        return number % 2 === 0
    }
))

// .findIndex
// restituisce l'indice alla quale troviamo quel numero
console.log(numbers.findIndex (
    // Al solito, ci troviamo la funzione di callback da definire
    function (number) {
        // se la funzione restituisce `true`, allora .findIndex() restituisce l'indice che siamo arrivati a controllare
        return number % 2 === 0
    }
))

// .includes
console.log(numbers.includes(6))