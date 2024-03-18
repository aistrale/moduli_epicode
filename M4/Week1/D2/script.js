/* funzione asincrona: JS sa che deve mettere un "segnaposto" così che JS la legge, la mette in memoria e quando ha i dati ci dà la funzione */
const getProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        return(data);
    } catch (error) {
        console.log(error);
    }
}
getProducts()

const newProduct = {
    title: "Elena's Product",
    description: "Lorem ipsum",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
}

const addProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = response.json();
        /* console.log(data);
        console.log(response); */
        return response
    } catch (error) {
        console.log(error);
    }
}

addProducts()
.then(res => console.log(res))


const updateProduct = {
    title: "Elena's Product 1",
    description: "Lorem ipsum",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
}

const editProduct = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products/1", {
            method: "PATCH",
            body: JSON.stringify(updateProduct),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

editProduct()
.then(res => console.log(res))

const deleteProduct = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products/1", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}
deleteProduct()
.then(res => console.log(res))

/* chiamata GET con metodo vecchio

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        data.products.map((product) => x(product.title, product.description))
    })
    .catch(error => {
        console.log(error);
    })

const x = (title, description) => {
    const y = document.body
    const p = document.createElement("p")
    p.innerHTML = `<p>${title} - ${description}</p>`
    y.appendChild(p)
}
*/