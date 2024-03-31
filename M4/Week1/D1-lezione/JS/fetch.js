const userContainer = document.querySelector("#user-container");

const image = userContainer.querySelector("img");
const fullName = userContainer.querySelector("h4");
const phoneNo = userContainer.querySelector("#phone-no");
const email = userContainer.querySelector("#email");
const streetAddress = userContainer.querySelector("#street-address");

function showData(serverResponseData) {
  const user = serverResponseData.results[0];

  image.src = user.picture.large;
  fullName.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  phoneNo.innerText = user.phone;
  email.innerText = user.email;
  streetAddress.innerHTML = `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}`;
}
// La funzione fetch() esegue una richiesta HTTP GET al server specificato
// e restituisce una Promise che risolve in un oggetto Response.
// Questa Promise verrà risolta con un oggetto Response una volta che la
// richiesta sarà completata.

fetch("https://randomuser.me/api/") // fetch() restituisce una Promise
  .then(function (response) {
    console.log(response);
    // magari potremmo semplicemente voler controllare lo stato HTTP della risposta
    console.log(response.status);
    // ad esempio: 200, 404, 500, ecc.
    // Tra l'altro, fetch ci agevola aggiungendo un flag "ok" alla response
    console.log(response.ok); // true se 2xx, false altrimenti

    return response.json(); // restituisce una Promise
  })
  .then(function (data) {
    console.log(data); // qui possiamo fare ciò che vogliamo con i dati
    showData(data);
  });

console.log("hello world");
console.log("macarena");
console.log("asereje");
