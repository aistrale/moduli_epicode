const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzNTE5NmU2MDQ3YjAwMTlmYTYwMmUiLCJpYXQiOjE3MTE0OTM1MjYsImV4cCI6MTcxMjcwMzEyNn0.PkvVrsJDf1OqXYkQ83iPwW2Bt-5BYuQO6_7uyXrKMkM";

const cardContainer = document.getElementById("cardContainer");

const newProduct = {
    name: "prova",
    description: "lorem ipsum",
    brand: "Apple",
    imageUrl: "https://picsum.photos/200/300",
    price: 500,
}

// per evitare di ripetere method e headers tutte le volte creo una variabile con dentro l'oggetto *method* e l'oggetto *headers*
// dichiarando OPTIONS all'inizio non serve che scrivo 4 funzioni, ma una sola dove metto tutta la logica usando una funzione astratta
const abstractFetch = async (url, options = {}) => {
    const defaultHeaders = {
        "Authorization": KEY,
        "Content-Type": "application/json",
    }
    const requestOptions = {
        method: options.method || "GET",
        headers: {...defaultHeaders /* spread operator */, ...options.headers} /* fa il merge */, ...options
    }
    if(options.body) /* body sono i dati che inviamo al server */{
        options.body = JSON.stringify(options.body);
    }
    try {
        const response = await fetch(url, requestOptions)
        if(!response.ok) {
            throw new Error (`${options.method} Response from fetch not ok`)
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw (error);
    }
}

const createCard = (product) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "col-12, col-md-4, col-lg-3 card")
    const img = document.createElement("img")
    img.setAttribute("class", "card-img-top")
    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    const cardTitle = document.createElement("h5")
    cardTitle.setAttribute("class", "card-title")
    const cardDescription = document.createElement("p")
    cardDescription.setAttribute("class", "card-text")
    const cardPrice = document.createElement("p")
    cardPrice.setAttribute("class", "card-text")

    img.src = "product.imageUrl"
    cardTitle.textContent = "product.name"
    cardDescription.textContent = "product.description"
    cardPrice.textContent = "product.price"

    cardBody.append(cardTitle, cardDescription, cardPrice)
    cardWrapper.append(img, cardTitle, cardBody)
    cardContainer.append(cardWrapper)
}

abstractFetch(ENDPOINT, {}).then(res.map(product => createCard(product)); /* GET */
/* abstractFetch(ENDPOINT, {method: "POST", body: newProduct}).then(res => console.log(res)); /* POST */

/* const getProduct = async (headers, method, body) => {
    try {
        const response = await fetch(ENDPOINT, HEADERS)
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error ("[GET] Response from fetch not ok");
        }
    } catch (error) {
        console.log(error);
    }
}
getProduct().then(body => console.log(body)) */

/* const postProduct = async () => {
    try {
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Authorization": KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error ("[POST] Response from fetch not ok");
        }
    } catch (error) {
        console.log(error);
    }
}
postProduct().then(body => console.log(body)) */

/* const putProduct = async (id) => {
    try {
        const response = await fetch(ENDPOINT, {
            method: "PUT",
            headers: {
                "Authorization": KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error ("[PUT] Response from fetch not ok");
        }
    } catch (error) {
        console.log(error);
    }
}
putProduct().then(body => console.log(body)) */

/* const deleteProduct = async (id) => {
    try {
        const response = await fetch(ENDPOINT, {
            method: "DELETE",
            headers: {
                "Authorization": KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error ("[DELETE] Response from fetch not ok");
        }
    } catch (error) {
        console.log(error);
    }
}
deleteProduct().then(body => console.log(body)) */