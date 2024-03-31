const SEARCH_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" // screaming snake case

// meglio cominciare scrivendo il **flusso** che ci aspettiamo dall'utente

// Il risultato che vogliamo ottenere in questo contesto è:

// 1. l'utente digita una stringa di ricerca

// 2. l'utente conferma premendo il tasto di ricerca
function search() { // una funzione che gestisce la ricerca
    // a. recuperiamo la stringa di ricerca usando l'id (il value del campo input)
    const inputValue = document.querySelector("#searchField").value

    // b. effettuare la chiamata al server
    fetch(SEARCH_URL + inputValue) // dobbiamo scrivere così perché nell'URL non abbiamo il risultato della ricerca, lo mette dopo l'utente

    // c. gestiamo la risposta: la fetch fa partire una chiamata HTTP e ci restituisce una promessa; in questa promessa però c'è la "prima scatola" con solo gli headers (è un po' come se fosse una matrioska)
        .then(r => r.json())
        .then(function (body) { // qui finalmente troviamo il body della risposta
            showResults(body.data)
        })

    // d. salviamo questa ricerca nell'elenco di ricerche recenti. Noi vogliamo l'oggetto, quindi dobbiamo fare 
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
    recentSearches.push(inputValue)
    // andiamo a reinserire nella stessa chiave l'array di recentSearches riconvertito a stringa --> quindi decodifichiamo da stringa ad array la lista di ricerche recenti
    if (recentSearches === null) {
        recentSearches = [inputValue]
    } else {
        recentSearches.push(inputValue)
    }
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
    showRecentSearches(recentSearches)

}

// 3. mostriamo all'utente i risultati della ricerca
function showResults(results) {
    console.log(results)

    const container = document.querySelector("#searchResultsContainer")
    container.innerHTML = results // mostriamo i risultati con una card di bootstrap
        .map(result => `
        <div class="card bg-transparent">
            <a href="/album.html?id=${result.album.id}">
                <img src="${result.album.cover_big}" class="card-img-top" alt="...">
            </a>    
            <div class="card-body">
                <h5 class="card-title">${result.title}</h5>
                <a href="/artist.html?id=${result.artist.id}">
                    <span>${result.artist.name}</span>
                </a>
            </div>
        </div>
        `)
        .join("")
}

function showRecentSearches(recentSearches) {
    const recentSearchesContainer = document.querySelector("#recent")

    recentSearchesContainer.innerHTML = recentSearches
        .map(recentSearch => /*html*/`
        <li class="card bg-transparent">
            ${recentSearch}
        </li>
        `)
        .join("")
}

// 4. l'utente può navigare in una pagina di dettaglio che mostra i dettagli di un album -> vedi artist.html e artist.js