/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* se la nostra previousScrollPositon è maggiore di currentScrollPositon (quella attuale), deve mettere una class alla navbar */

const navbar = document.querySelector(".navbar");
let previousScrollPositon = window.pageYOffset;

addEventListener("scroll", ()=> {
    console.log(window.pageYOffset);
    handlePageScroll();
})

function handlePageScroll() {
    const currentScrollPositon = window.pageYOffset;
    if (previousScrollPositon > currentScrollPositon /*vuol dire che abbiamo scrollato */) {
        navbar.classList.remove("hideNavbar")
    } else {
        navbar.classList.add("hideNavbar")
    }
    previousScrollPositon = currentScrollPositon;
}
