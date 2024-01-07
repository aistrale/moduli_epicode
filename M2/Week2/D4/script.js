/* const prices = [34, 5, 2];
const shippingCost = 50; */
// let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

// checks if user is ambassador
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

let users = [marco, paul, amy];

function checkAmbassadorStatus() {
    users.forEach(user => {
        if (users.isAmbassador === true) {
            console.log("è un ambassador");
        } else {
            console.log("non è un ambassador");
        }
    })
}

checkAmbassadorStatus()

// checks if user can use 30% discount

function grantsDiscount() {
    users.forEach(user => {
        if (user.isAmbassador === true) {
            console.log();
        } else {
            
        }
    })
}