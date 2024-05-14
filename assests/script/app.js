// console.dir(document.styleSheets)

// Hamburger Menu 
let navLinks = document.getElementById("nav-links");
function hamurgerMenu() {
    navLinks.style.display = "flex"
}

function removeHamburger() {
    if (navLinks.style.display === "flex") {
       window.matchMedia(navLinks.style.display= "none")
    } 
}