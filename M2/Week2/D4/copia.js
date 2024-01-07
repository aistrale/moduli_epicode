let utenteCheEffettuaLAcquisto = 0 //cambia il valore qui per provare se il tuo algoritmo funziona!

// /Ho creato un ciclo per semplificare il processo poiché il costo degli ipotetici articoli presenti nell'array possono variare sia di numero che di prezzo quindi ho lascato che in automatico calcolasse il valore

for(let n of prices){
    utenteCheEffettuaLAcquisto += n;
}
// Ho scelto di creare una serie di if,else if e else poiché in basse alla condizione che si verificava per gestire la response verso l'utente

if (totale > 100) {
    console.log('WoW hai ottenuto la spedizione gratuita! Grazie di aver speso: ' + totale + '€');
} else if (marco.isAmbassador === true) {
    totaleScontato = totale - (0.3 * totale)
    console.log('Ciao hai diritto ad uno sconto del 30% quindi il tuo carrello vale: ' + totaleScontato + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' +  'il totale è: ' + (Number(totaleScontato) + Number(shippingCost)) + '€ ');
} else if (marco.isAmbassador === false) {
    console.log('Ciao il valore del tuo carrello è: ' + totale + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' + 'il totale è: ' + (Number(totale) + Number(shippingCost)) + '€ ');
} else if (paul.isAmbassador === true) {
    totaleScontato = totale - (0.3 * totale)
    console.log('Ciao hai diritto ad uno sconto del 30% quindi il tuo carrello vale: ' + totaleScontato + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' +  'il totale è: ' + (Number(totaleScontato) + Number(shippingCost)) + '€ ');
} else if (paul.isAmbassador === false) {
    console.log('Ciao il valore del tuo carrello è: ' + totale + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' + 'il totale è: ' + (Number(totale) + Number(shippingCost)) + '€ ');
} else if (paul.isAmbassador === true) {
    totaleScontato = totale - (0.3 * totale)
    console.log('Ciao hai diritto ad uno sconto del 30% quindi il tuo carrello vale: ' + totaleScontato + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' +  'il totale è: ' + (Number(totaleScontato) + Number(shippingCost)) + '€ ');
} else if (paul.isAmbassador === false) {
    console.log('Ciao il valore del tuo carrello è: ' + totale + '€, ' + 'il costo della spedizione è: ' + shippingCost + '€,' + 'il totale è: ' + (Number(totale) + Number(shippingCost)) + '€ ');
}else {
    console.log("Ciao si è verificato un'errore perfavore riprova");
}

// p.s. dove leggete totale fate conto che ora ci sta "utenteCheEffettuaLAcquisto"

let statusUser = []
let onlyAmbassador = []


statusUser.push(
   {
        name: "Marco",
        lastName: "Rossi",
        isAmbassador: true,
    },
    {
        name: "Gennro",
        lastName: "Rossi",
        isAmbassador: true,
    },
    {
        name: "Paul",
        lastName: "Flynn",
        isAmbassador: false,
    },
    {
        name: "Amy",
        lastName: "Reed",
        isAmbassador: false,
    }
)

for(let sU of statusUser){
    if(sU.isAmbassador === true){
        onlyAmbassador.push(
        sU.name + ' ' + sU.lastName
        )
        console.log(sU.name + ' ' + sU.lastName + "e' un ambassador");
    }else{
        console.log(sU.name + ' ' + sU.lastName + " non e' un ambassador");
    }

}

console.log(onlyAmbassador);