// keyword `this` in JS viene usata per fare riferimento al "contesto di esecuzione". Nelle `function` "normali" funziona in un modo, nelle `arrow function` in un altro.

function Car(make, model) {
    this.make = make
    this.model = model
}
const car = new Car("Porsche", "Cayman S")
console.log(car)

// `new` va a creare una `constructor function`, ovvero una funzione che "costruisce" un oggetto. Fa parte della cosiddetta **programmazione a oggetti**, diversa dalla **programmazione funzionale**.
// Che rapporto c'è tra `new` e `this`? Che `this` si riferisce al nuovo oggetto che creiamo con `new`.
// Questo modo di scrivere è un po' vecchio, oggi si scriverebbe qualcosa come

/* class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
} */

const firstObject = {
    name: "Tizio Caio",
    description: "whatever",
    getCapitalName: () => {
        console.log(this) // qui `this` si riferisce al contesto di esecuzione **globale**
        // console.log(this.description.toUpperCase())
    }
}
const secondObject = {
    name: "Tizio Caio",
    description: "whatever",
    getCapitalName: function () {
        console.log(this) // qui `this` si riferisce a `secondObject`
        // console.log(this.description.toUpperCase())
    }
}


firstObject.getCapitalName()
secondObject.getCapitalName()