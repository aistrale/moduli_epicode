const cardContainer = document.getElementById("cardContainer");
const cartModal = document.getElementById("cartModal");
let myBooks = []
const savedCart = JSON.parse(localStorage.getItem("cartSummary"))
const cart = savedCart ? savedCart : [];
const emptyCartBtn = document.getElementById("emptyCart");
const numberCartItems = document.getElementById("numberCartItems");
const searchInput = document.getElementById("searchField");
const searchBtn = document.getElementById("searchBtn");

const getBooks = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books");
        const books = await response.json();
        myBooks.push(...books);
        return books
    } catch (error) {
        console.log(error.message);
    }
}

const addBookToCart = (book) => {
    cart.push(book)
    localStorage.setItem("cartSummary", JSON.stringify(cart))
    // window.location.reload()
    console.log(cart);
}

const populateCartModal = () => {
    if(savedCart) {
        savedCart.map((cartItem) => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${cartItem.title}, ${cartItem.price}</p>`;
            cartModal.append(div);
        })
    } else {
        const paragraph = document.createElement("p");
        paragraph.innerText = "Non ci sono elementi nel carrello"
        cartModal.append(paragraph);
    }
}
populateCartModal()

emptyCartBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.reload()
})

const cartLength = () => {
    if(savedCart) {
        const length = savedCart.length;
        numberCartItems.innerText = length;
    } else {
        numberCartItems.innerText = 0;
    }
}
cartLength()


const createCard = (book) => {
    const container = document.createElement("div");
    container.setAttribute("class", "col-12 col-md-4 col-lg-3 pb-2")
    container.innerHTML = 
        `<div class="card">
                <img src="${book.img}" class="card-img-top book-cover" alt="book cover">
            <div class="card-body">
                <h5 class="card-title text-truncate">${book.title}</h5>
                <p class="card-text">${book.category}</p>
                <p class="card-text">${book.price} &#36;</p>
                <p class="card-text">${book.asin}</p>
                <a href="#" class="btn btn-primary add-to-cart-btn">Add to cart</a>
            </div>
        </div>`
    container.querySelector(".add-to-cart-btn").addEventListener("click", () => {
        addBookToCart({price: book.price, title: book.title})
        container.classList.add("bg-dark")
    })
  cardContainer.append(container)

}

const filterBooks = (inputTerm) => {
    return myBooks
    .filter((singleBook) => singleBook.title.toLowerCase().includes(inputTerm.toLowerCase())
    || singleBook.price >= inputTerm && singleBook.price < Math.ceil(inputTerm)+1
    )
}

searchInput.addEventListener("input", () => {
    if(searchInput.value === "") {
        window.location.reload()
    }
})

searchBtn.addEventListener("click", () => {
    const filteredBooks = filterBooks(searchInput.value)
    myBooks = filteredBooks;
    cardContainer.innerHTML = "";
    myBooks.forEach((singleBook) => {
        createCard(singleBook)
    })
    console.log(myBooks);
})


getBooks().then(response => {
    myBooks.forEach((singleBook) => {
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