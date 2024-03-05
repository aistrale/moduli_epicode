const cardContainer = document.querySelector(".card-container");

const url = "https://dummyjson.com/products/";

const getCards = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}

const products = getCards().then(res => {
    res.map(product => createCard(product))
})

const createCard = (product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = product.thumbnail;

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = product.title;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerHTML = product.description;

    card.append(img, title, description);
    cardContainer.append(card);
}