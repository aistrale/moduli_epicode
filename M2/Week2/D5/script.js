const globalData = {
    navbar: {
        title: "il mio sito",
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4",
        ],
    },
    cards: [
        {
            title: "titoloCard1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            isVisible: true,
            price: 100,
        },
        {
            title: "titoloCard2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            isVisible: false,
            price: 70,
        },
        {
            title: "titoloCard3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            isVisible: true,
            price: 60,
        }
    ]
}

const navbar = document.getElementById("navbar");
// console.log(navbar);
const main = document.getElementById("main");

function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    const imgLogo = document.createElement("img");
    imgLogo.src = "https://picsum.photos/id/237/200/300";
    logoContainer.append(imgLogo);
    navbar.append(logoContainer);
}

createAndAppendLogo()

function createAndAppendSideTitle() {
    const navTitle = document.createElement("h1");
    navTitle.textContent = globalData.navbar.title;
    navbar.append(navTitle);
}

createAndAppendSideTitle()

function createAndAppendMenu() {
    const navMenuUl = document.createElement("ul");
    globalData.navbar.menu.forEach(menuLi => {
        const navMenuLi = document.createElement("li");
        navMenuLi.textContent = menuLi;
        navMenuUl.append(navMenuLi);
    });
    navbar.append(navMenuUl);
}

createAndAppendMenu()

function createAndAppendCards() {
    globalData.cards.forEach(card => {
        if(card.isVisible === true) {
            const cardContainer = document.createElement("div");
        const cardTitle = document.createElement("h1");
        cardTitle.textContent = card.title;
        const cardDescription = document.createElement("p");
        cardDescription.textContent = card.description;
        const cardPrice = document.createElement("p");
        cardPrice.textContent = card.price;
        cardContainer.append(cardTitle,cardDescription,cardPrice);
        main.append(cardContainer);
        }
    }
    )
}

createAndAppendCards()


function createAndAppendTotalPrice() {
    const totalPrice = document.createElement("div");
    let totalSum = 0;
    globalData.cards.forEach(card => {
        totalSum += card.price;
    })
    totalPrice.textContent = totalSum;
    main.append(totalPrice);
}

createAndAppendTotalPrice()