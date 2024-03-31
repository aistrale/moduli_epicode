const userContainer = document.querySelector('main')

// il "dietro le quinte" delle funzioni asincrone
window.onload = () => {
    fetch("https://randomuser.me/api/?results=50") // all'onload andiamo a fare la fetch dei 50 utenti in un array
        .then(response => response.json()) // quando il server ci risponde noi vogliamo i risultati in .json
        .then(displayUsers) // quando il .json è stato "spacchettato" vogliamo vedere i dati in console
}

// mostriamo i dati
function displayUsers(data) {
    console.log(data.results)
    userContainer.innerHTML = data.results
        .filter(user => user.dob.age > 60) // vogliamo andare a recuperare sologli utenti con +60 anni
        .map(userToHTML) // con .map() andiamo a creare una stringa per ogni user e mostrare il risultato nell'HTML.
        .join("")
}

// trasformiamo ogni user in una stringa HTML
function userToHTML(user) {
    return `
        <div class="list-group-item list-group-item-action d-flex gap-2 px-2 py-3">
            <div>
                <img src=${user.picture.large} class="rounded-circle">
            </div>
            <div>
                <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                <p>Age: ${user.dob.age}</p>
            </div>
        </div>`
}