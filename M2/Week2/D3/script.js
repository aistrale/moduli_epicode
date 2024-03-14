const globalData = {
    navbar: {
        logo: "https://picsum.photos/id/13/100",
        title: {
            text: "Il mio sito",
            type: "h1",
        },
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4",
            "menu5",
        ]
    },
    main: {
        cards: [
            {
                title: "titolo Card 1",
                img: "https://picsum.photos/id/10/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: false,
                price: 500,
            },
            {
                title: "titolo Card 2",
                img: "https://picsum.photos/id/11/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: true,
                price: 324,
            },
            {
                title: "titolo Card 3",
                img: "https://picsum.photos/id/12/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: false,
                price: 5300,
            },
            {
                title: "titolo Card 4",
                img: "https://picsum.photos/id/14/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: true,
                price: 232,
            },
            {
                title: "titolo Card 5",
                img: "https://picsum.photos/id/15/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: true,
                price: 85,
            },
            {
                title: "titolo Card 6",
                img: "https://picsum.photos/id/16/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: false,
                price: 578,
            },
            {
                title: "titolo Card 7",
                img: "https://picsum.photos/id/17/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: true,
                price: 234,
            },
            {
                title: "titolo Card 8",
                img: "https://picsum.photos/id/18/200",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit laborum, totam tempore blanditiis iure?",
                isVisible: false,
                price: 954,
            }
        ]
    }
}

// console.log(globalData.main.cards[1].title);

const navbar = document.getElementById("navbar");

function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("navbarLogo");
    const img = document.createElement("img");
    img.src = globalData.navbar.logo;
    logoContainer.append(img);
    navbar.append(logoContainer);
}

function createAndAppendTitle() {
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    const title = document.createElement(globalData.navbar.title.type);
    title.textContent = globalData.navbar.title.text;
    titleContainer.append(title);
    navbar.append(titleContainer);
}

/* function createAndAppendMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    const menuUl = document.createElement("ul");
    for(let index = 0; index < globalData.navbar.menu.length; index++) {
        const menuLi = document.createElement("li");
        menuLi.textContent = globalData.navbar.menu[index];
        menuUl.append(menuLi);
        menuContainer.append(menuUl);
        navbar.append(menuContainer);
    }
} */

// creaimo la stessa cosa con un forEach
/* function createAndAppendMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    const menuUl = document.createElement("ul");
    globalData.navbar.menu.forEach((menuItem) => {
        const menuLi = document.createElement("li");
        menuLi.textContent = menuItem;
        menuUl.append(menuLi);
        menuContainer.append(menuUl);
        navbar.append(menuContainer);
    }
)} */

// creiamo la stessa cosa con un .map
function createAndAppendMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    const menuUl = document.createElement("ul");

    const index = globalData.navbar.menu.map((index) => {
        const menuLi = document.createElement("li");
        menuLi.textContent = index;
        menuUl.append(menuLi);
        menuContainer.append(menuUl);
        navbar.append(menuContainer);
    })
}

createAndAppendLogo();
createAndAppendTitle();
createAndAppendMenu();

const main = document.getElementById("main");

function createAndAppendCards() {
    globalData.main.cards.forEach((card) => {

       if(card.isVisible) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("cards");

        const cardTtitle = document.createElement("h2");
        cardTtitle.textContent = card.title;

        const imgContaineer = document.createElement("img");
        imgContaineer.src = card.img;

        const cardDescription = document.createElement("p");
        cardDescription.textContent = card.description;

        const price = document.createElement("div");
        price.classList.add("cardPrice");
        price.innerHTML = card.price + " " + "&#8364;";

        cardContainer.append(cardTtitle, imgContaineer, cardDescription, price);
        main.append(cardContainer);
       }
    })
}
createAndAppendCards()

// creare un div dove si visualizzi il totale delle card *visibili*

let total = 0;

function createAndAppendTotalPrice() {
    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.classList.add("priceContainer");
    totalPriceContainer.innerHTML = "&#8364;" + " ";
    /* qui devo usare il .map perché voglio che mi ritorni una somma; .forEach non ritorna nessun valore*/

    const totalPrice = globalData.main.cards.map((card) => {
        if(card.isVisible) {
            return card.price;
        } else {
            return 0;
        }
    })
    totalPrice.forEach((price) => {
        total += price;
    })
    totalPriceContainer.append(total);
    main.append(totalPriceContainer);
}

createAndAppendTotalPrice()