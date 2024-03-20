const cardContainer = document.getElementById("cardContainer");
const myBooks = []
const cart = []

const getBooks = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books");
        const books = await response.json();
        myBooks.push(books);
        return books
    } catch (error) {
        console.log(error.message);
    }
}

const addBookToCart = (book) => {
    cart.push(book)
     console.log(cart);
}

const createCard = (book) => {
    const container = document.createElement("div");
    container.setAttribute("class", "col-12 col-md-4 col-lg-3")
    container.innerHTML = 
        `<div class="card">
            <div class="card-img">
                <img src="${book.img}" class="img" alt="book cover">
            </div>
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.category}</p>
                <p class="card-text">${book.price} &#36;</p>
                <p class="card-text">${book.asin}</p>
                <a href="#" class="btn btn-primary add-to-cart-btn">Add to cart</a>
            </div>
        </div>`
    container.querySelector(".add-to-cart-btn").addEventListener("click", () => {
        addBookToCart({price: book.price, title: book.title})
    })
  cardContainer.append(container)

}

getBooks().then(response => {
    response.forEach((singleBook) => {
        createCard(singleBook)
        
    })
    /* const getButtons = document.querySelectorAll(".add-to-cart-btn");
    getButtons.forEach((button) => {
        button.addEventListener("click", function()  {
            console.log("cliccato");
            console.log(this.parentElement);
        })
    }) */
})

/* .then(books => {
    books.map(book => createCard(book))
}) */