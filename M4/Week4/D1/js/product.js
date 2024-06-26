const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzNTE5NmU2MDQ3YjAwMTlmYTYwMmUiLCJpYXQiOjE3MTE0OTM1MjYsImV4cCI6MTcxMjcwMzEyNn0.PkvVrsJDf1OqXYkQ83iPwW2Bt-5BYuQO6_7uyXrKMkM";

const getProductDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    try {
        const response = await fetch(`${ENDPOINT}/${productId}`, {
            headers: {
                "Authorization": KEY
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch product details');
        }
        const productDetails = await response.json();
        displayProductDetails(productDetails);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
};

const displayProductDetails = (product) => {
    const productDetailsContainer = document.getElementById("productDetailsContainer");
    
    const productDetailsCard = document.createElement("div");
    productDetailsCard.setAttribute("class", "col-12 col-md-6 offset-md-3 card");

    productDetailsCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <p class="card-text">Price: $${product.price}</p>
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        </div>
    `;

    productDetailsContainer.appendChild(productDetailsCard);
};

getProductDetails();