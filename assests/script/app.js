// Hamburger Menu Displayer 
function hamburger_menu(){
let nav_menu =document.getElementById("nav_links");
if(window.matchMedia(nav_menu.style.display === "none")){
    nav_menu.style.display = "flex";
    console.log("Hamburger Active");
}else{
    console.log("Hamburger Failed");
}
}

// Hamburger remover 
function hamburger_remover(){
    let nav_menu =document.getElementById("nav_links");
    if(nav_menu.style.display === "flex"){
        nav_menu.style.display = "none";
        console.log("Hamburger Removed");
    }else{
        console.log("Hamburger Failed");
    }   
}