
const promessaDiUnNumeroPariFra2Secondi = new Promise((resolve, reject) => {

    setTimeout(() => {
        const number = Math.round(Math.random() * 10) // creiamo un numero a caso
        const isEven = number % 2 === 0

        if (isEven) {
            resolve(number)
        } else {
            reject(new Error("Number is not even"))
        }

        // resolve o reject non impedisce il proseguimento della funzione e quindi il resto viene eseguito
        console.log('test')
    }, 2000)

})

promessaDiUnNumeroPariFra2Secondi
    .then( // gestiamo lo scenario quando la promessa viene risolta con successo. Gli passiamo la **funzione** della promessa risolta con successo
        function (response) {
            // certamente sarà un numero pari....
            console.log("Il numero è pari!!!", response)
        }
    )
    .catch(
        function (error) {
            console.error("Errore micidiale!!! Messaggio di errore: ", error.message)
        }
    )

