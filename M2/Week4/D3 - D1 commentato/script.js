/*
ALGORITMO DI RICERCA
1. mette i parametri in lowercase
2. crea un array vuoto che andremo a popolare con i risultati 
3. ogni singolo elemento dell'oggetto dell'array (= "job") viene trasformato in lowercase
4. SE entrambe le variabili sono presenti, le inserisce nell'array vuoto creato (= "result") e dice anche QUANTI risultati ha trovato
*/
function searchJob(title, location) {
    title = title.toLowerCase();
    location = location.toLowerCase();

    const result = [];
    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        if (jobTitle.includes(title) && jobLocation.includes(location)) {
            result.push(job)
        }
    });
    return {
        count: result.length,
        result
    }
}

/*
searchJob()
console.log(searchJob("marketing", "berli"))
*/

/*
FUNZIONE DI RICERCA
1. prende i valori che l'utente inserisce nei campi input
2. crea una variabile dove inserisce il risultato dell'algoritmo
*/
function search() {
    const title = document.getElementById("searchJob").value;
    const location = document.getElementById("searchPlace").value;

    const searchResult = searchJob(title, location)
    console.log(searchResult)
    return searchResult
}

/*
EVENT LISTENER
stiamo ascoltando l'evento "submit" del <form>. Quando noi clicchiamo sul "submit", JS scatena un evento "submit" che restituisce poi la logica all'interno delle {}, ovvero mostra i risultati dell'algoritmo.
In altre parole, nelle {}:
1. si lancia la funzione showResults()
2. che come parametro vuole un array di risultati da ciclare, che proviene da search()
*/
const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // search()
    showResults(search())
})

/*
MOSTRARE I RISULTATI
1. crea un contenitore <div> con all'interno un <ul>
2. per ogni risultato della ricerca crea un <li> con il risultato
3. mostrami il tutto nell'html
*/

// Visualizza risultati come <ul>
/* function showResults(searchResults){
    const resultsContainer = document.createElement("div");
    const resultsList = document.createElement("ul");
    searchResults.result.forEach(searchItem => {
        const itemList = document.createElement("li");
        itemList.innerHTML = `title ${searchItem.title}, location ${searchItem.location}`;
        resultsList.append(itemList);
    }
    )
    resultsContainer.append(resultsList);
    document.body.append(resultsContainer);
}
*/

// visualizza risultati come <table>
function showResults(searchResults){
    const resultsContainer = document.createElement("div");
    const resultsH2 = document.createElement("h2");
    resultsH2.innerHTML = "Results";
    resultsH2.classList.add("results");
    const resultsParagraph = document.createElement("p");
    resultsParagraph.innerHTML = "These entries match your search:";
    resultsParagraph.classList.add("results");

    const resultsTable = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableHeaderRow = document.createElement("tr");
    const tableHeaderTitle = document.createElement("th");
    tableHeaderTitle.innerHTML = "Title";
    const tableHeaderPosition = document.createElement("th")
    tableHeaderPosition.innerHTML = "Position";
    const tableBody = document.createElement("tbody");

    searchResults.result.forEach(searchItem => {
        const tableRow = document.createElement("tr");
        const tableCellTitle = document.createElement("td");
        tableCellTitle.innerHTML = `${searchItem.title},`;
        const tableCellLocation = document.createElement("td");
        tableCellLocation.innerHTML = `${searchItem.location}`;
        tableRow.append(tableCellTitle);
        tableRow.append(tableCellLocation);
        tableBody.append(tableRow);
    })

    tableHeaderRow.append(tableHeaderTitle);
    tableHeaderRow.append(tableHeaderPosition);
    tableHeader.append(tableHeaderRow);
    resultsTable.append(tableHeader);
    resultsTable.append(tableBody);

    resultsContainer.append(resultsH2);
    resultsContainer.append(resultsParagraph);
    resultsContainer.append(resultsTable);
    document.body.append(resultsContainer);
}