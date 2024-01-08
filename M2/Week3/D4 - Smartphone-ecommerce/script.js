// function changeH1(){
//     let siteTitle = document.querySelector("#siteTitle");
//     siteTitle.textContent = "il mio nuovo negozio";
// }

// changeH1()



// function changeBgColor(){
//     let bGColor = document.body.style.backgroundColor = "#e3e2a9";
// }

// changeBgColor()


// function changeAddress(){
//     let siteAddress = document.querySelector("#shopAddress");
//     siteAddress.textContent = "1518 Hinkle Lake Road, Roxbury, UK"
// }

// changeAddress()

function addClass() {
    let productLinks = document.querySelector("#buyNowLink");
    productLinks.forEach(productLink => {
        buyNowLink.classList.add("newClass");
    });
}

addClass()