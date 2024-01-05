import loadhomepage from "./homepage";
import loadMenu from "./menu";
import loadContact from "./contact";


function loadNavBar(){
    console.log("This is loading the nav bar!");
    const content = document.createElement("div");
    content.id = ("content");
    const navBar = document.createElement("div");

    navBar.classList.add("navbar", "navbar-dark", "bg-dark", "justify-content-center");
    
    // Addinv home to the navbar
    navBar.innerHTML = ("\
        <li class=\"nav-item px-3\">\
        <a class=\"nav-link\" id=\"homeButton\" href=\"#\">Home</a>\
        </li>");

    
    navBar.innerHTML+= ("\
    <li class=\"nav-item px-3\">\
    <a class=\"nav-link\" id=\"menuButton\" href=\"#\">Menu</a>\
    </li>");

    navBar.innerHTML+= ("\
        <li class=\"nav-item px-3\">\
        <a class=\"nav-link\" id=\"contactButton\" href=\"#\">Contact</a>\
        </li>");


    
    document.body.appendChild(content);
    content.appendChild(navBar);

    return;
}

function addEventstoNav(){
    console.log("this is adding eventlisteners!");
    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const contactButton = document.getElementById("contactButton");

    homeButton.addEventListener("click", () => {
        clearPage();
        loadhomepage();
    });

    menuButton.addEventListener("click", () => {
        clearPage();
        loadMenu();
    });

    contactButton.addEventListener("click", () => {
        clearPage();
        loadContact();
    })
}

function clearPage(){
    console.log("this is trying to clear the page");
    document.body.innerHTML = "";
    loadNavBar();
    addEventstoNav();
}



function loadWebsite(){
    loadNavBar();
    addEventstoNav();
}

export default loadWebsite; addEventstoNav;