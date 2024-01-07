function createHeader() {
    const headerContainer = document.createElement("header")
    const siteHeader = document.createElement("h1");
    siteHeader.textContent = "Shop home";
    headerContainer.append(siteHeader);
    document.body.append(headerContainer);
}

createHeader()

function createCardsContainer() {
    const flexContainer = document.createElement ("div");
    flexContainer.classList.add("flex-container");
    products.forEach(product => {
        // console.log(product);
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = product.title;

        const cardDescription = document.createElement("p");
        cardDescription.textContent = product.description;

        const cardPrice = document.createElement("p");
        cardPrice.textContent = product.price;

        const cardLink = document.createElement("a");
        cardLink.href = product.link;

        const cardImage = document.createElement("img");
        cardImage.src = product.image;
        cardImage.classList.add("card-img");

        cardContainer.append(cardTitle, cardDescription, cardPrice, cardLink, cardImage)
        flexContainer.append(cardContainer);
    });
    document.body.append(flexContainer);
}

createCardsContainer()

function createFooter() {
    const footerContainer = document.createElement("div");
    
    const shopName = document.createElement("p");
    shopName.textContent = footerData.shopName;

    const shopLink = document.createElement("a");
    shopLink.href = footerData.shopLink;
    shopLink.textContent = footerData.shopLink;

    footerContainer.append(shopName, shopLink);
    document.body.append(footerContainer);
}

createFooter()