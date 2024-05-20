// console.dir(document.styleSheets)

// Main Stylesheet 
let mainStylesheet = document.getElementById("main-stylesheet");
console.log(mainStylesheet);

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

function darkMode(){
    mainStylesheet.href = "./assests/Media/dark.css";
    console.log(mainStylesheet);
}