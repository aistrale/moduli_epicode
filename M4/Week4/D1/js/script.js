const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzNTE5NmU2MDQ3YjAwMTlmYTYwMmUiLCJpYXQiOjE3MTE0OTM1MjYsImV4cCI6MTcxMjcwMzEyNn0.PkvVrsJDf1OqXYkQ83iPwW2Bt-5BYuQO6_7uyXrKMkM";

const cardContainer = document.getElementById("cardContainer");

const abstractFetch = async (url, options = {}) => {
    const defaultHeaders = {
        "Authorization": KEY,
        "Content-Type": "application/json",
    }
    const requestOptions = {
        method: options.method || "GET",
        headers: {...defaultHeaders, ...options.headers}, ...options
    }
    if (options.body) {
        options.body = JSON.stringify(options.body);
    }
    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error (`${options.method} Response from fetch not ok`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw (error);
    }
}

const createCard = (product) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "col-12 col-md-4 col-lg-3 px-md-0 card");
    
    const productLink = document.createElement("a");
    productLink.setAttribute("href", `product.html?id=${product._id}`);
    productLink.setAttribute("class", "card-link");

    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top px-md-1 py-md-1");
    img.setAttribute("src", product.imageUrl);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h6");
    cardTitle.setAttribute("class", "card-title m-0");
    cardTitle.textContent = product.name;

    const cardDescription = document.createElement("p");
    cardDescription.setAttribute("class", "card-text m-0");
    cardDescription.textContent = product.description;

    const cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-text");
    cardPrice.textContent = `Price: $ ${product.price}`;

    cardBody.append(cardTitle, cardDescription, cardPrice);
    productLink.append(img, cardBody);
    cardWrapper.appendChild(productLink);
    
    cardContainer.appendChild(cardWrapper);
}

abstractFetch(ENDPOINT, {}).then(res => res.map(product => createCard(product)));