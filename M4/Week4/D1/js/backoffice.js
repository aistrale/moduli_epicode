const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzNTE5NmU2MDQ3YjAwMTlmYTYwMmUiLCJpYXQiOjE3MTE0OTM1MjYsImV4cCI6MTcxMjcwMzEyNn0.PkvVrsJDf1OqXYkQ83iPwW2Bt-5BYuQO6_7uyXrKMkM";

const addBtn = document.querySelector("#add-product-btn");

const getFormValues = () => {
    const form = document.getElementById("add-product-form");
    const formData = new FormData(form);
    const values = {};
    formData.forEach((value, key) => {
        values[key] = value;
    });
    return values;
};

addBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const productData = getFormValues();
    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': KEY
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error('Failed to add product');
        }
        document.getElementById("add-product-form").reset();
        
        await loadProducts();
        
        console.log('Product added successfully');
    } catch (error) {
        console.error('Error adding product:', error);
    }
});

const loadProducts = async () => {
    const response = await fetch(ENDPOINT, {
        headers: {
            "Authorization": KEY
        }
    });
    const products = await response.json();
    const productRow = document.getElementById("productRow");

    productRow.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("div");
        row.setAttribute("class", "d-flex justify-content-around gap-5 mb-2")
        row.innerHTML = `
            <div class="d-flex justify-content-center align-items-center">
                <img src="${product.imageUrl}" alt="${product.name}" class="row-img">
                <div>
                    <a href="product.html?id=${product._id}" class="card-link"><h6 class="card-title ps-2">${product.name}</h6></a>
                    <p class="card-text ps-2">${product.brand} - $ ${product.price}</p>
                </div>
            </div>
            <div class="d-flex justify-content-evenly align-items-center gap-2">
                <button class="btn btn-sm" onclick="deleteProduct('${product._id}')"><i class="bi bi-trash"></i></button>
                <button class="btn btn-sm" onclick="editProduct('${product._id}')"><i class="bi bi-pencil-square"></i></button>
            </div>
        `;
        productRow.appendChild(row);
    });
};

const deleteProduct = async (productId) => {
    try {
        await fetch(`${ENDPOINT}/${productId}`, {
            method: "DELETE",
            headers: {
                "Authorization": KEY
            }
        });
        loadProducts();
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};

const editProduct = async (productId) => {
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
        
        const editForm = document.getElementById("edit-product-form");
        editForm.querySelector("[name='edit-name']").value = productDetails.name;
        editForm.querySelector("[name='edit-description']").value = productDetails.description;
        editForm.querySelector("[name='edit-brand']").value = productDetails.brand;
        editForm.querySelector("[name='edit-price']").value = productDetails.price;
        editForm.querySelector("[name='edit-imageUrl']").value = productDetails.imageUrl;

        editForm.style.display = "block";
        document.getElementById("add-product-form").style.display = "none";

        editForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const updatedProductData = {
                name: editForm.querySelector("[name='edit-name']").value,
                description: editForm.querySelector("[name='edit-description']").value,
                brand: editForm.querySelector("[name='edit-brand']").value,
                price: editForm.querySelector("[name='edit-price']").value,
                imageUrl: editForm.querySelector("[name='edit-imageUrl']").value
            };

            try {
                const updateResponse = await fetch(`${ENDPOINT}/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': KEY
                    },
                    body: JSON.stringify(updatedProductData)
                });

                if (!updateResponse.ok) {
                    throw new Error('Failed to update product');
                }

                editForm.reset();
                
                loadProducts();
                
                console.log('Product updated successfully');
            } catch (error) {
                console.error('Error updating product:', error);
            }
        });

    } catch (error) {
        console.error('Error fetching product details:', error);
    }
};

window.onload = loadProducts;