const liTexts = ["Consegna gratuita a partire da 24,99", "Premi esclusivi Nintendo", "Resi gratuiti"];

const navUl = document.getElementById("bottomMenu");
const createLi = document.createElement("li");

/* modo più verboso
createLi.innerHTML = liTexts[0];
navUl.appendChild(createLi.cloneNode(true));
createLi.innerHTML = liTexts[1];
navUl.appendChild(createLi.cloneNode(true));
createLi.innerHTML = liTexts[2];
navUl.appendChild(createLi.cloneNode(true));
*/

// modo meno verboso - .map()
// fai una mappa dell'array = "scorri" l'array e fai per ogni elemento qualcosa
// "item", ovvero il parametro, è il singolo elemento di ogni indice
const listItems = liTexts.map((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    navUl.append(li);

    return li;
});

/*
// modo con .forEach
liTexts.forEach ((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    navUl.append(li);
})
*/

const cardContainer = document.getElementById("cardsContainer");

function createCard(title, src, paragraph) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("card");
    const createTitle = document.createElement("h3");
    createTitle.innerHTML = title;
    const createImg = document.createElement("img");
    createImg.classList.add("card-img");
    createImg.src = src;
    const createText = document.createElement("p");
    createText.innerHTML = paragraph;

    createDiv.append(createTitle, createImg, createText);
    cardContainer.append(createDiv);
}
createCard("Gioco 2", "https://picsum.photos/id/14/200", "Descrizione 2")
createCard("Gioco 3", "https://picsum.photos/id/15/200", "Descrizione 3")
createCard("Gioco 4", "https://picsum.photos/id/16/200", "Descrizione 4")