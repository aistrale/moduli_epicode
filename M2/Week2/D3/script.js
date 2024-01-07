const globalData = {
    navbar: {
        logo: "https://picsum.photos/seed/picsum/200/300",
        title: {
            text: "il mio sito",
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
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                title: "titolo Card 1",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }
        ]
    }
}

// console log card2
// console.log(globalData.main.card[1].title);

const navbar = document.getElementById("navbar");

function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = globalData.navbar.logo;
    logoContainer.append(img);
    navbar.append(logoContainer);
}

function createAndAppendTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement(globalData.navbar.title.type);
    title.textContent = globalData.navbar.title.text;
    titleContainer.append(title);
    navbar.append(titleContainer);
}

function createAndAppendMenu() {
    const menuUl = document.createElement("ul");

/*     for(let index = 0; index < globalData.navbar.menu.length; index++);{
        const menuLi = document.createElement("li");
        menuLi.textContent = globalData.navbar.menu[index];
        menuUl.append(menuLi);
        navbar.append(menuUl);
    } */
}

createAndAppendLogo();
createAndAppendTitle();
createAndAppendMenu();

// alt+shit+a > commneto


// function createAndAppendMenu() {
//     const menuUl = document.createElement("ul");
//     globalData.navbar.menu.forEach(menu) => {
//     const menuLi = document.createElement("li");
//     menuLi.textContent = menu;
//     }
// }