function loadNavBar(){

    const content = document.getElementById("content");
    const navBar = document.createElement("div");

    navBar.classList.add("navbar", "navbar-dark", "bg-dark", "justify-content-center");
    
    // Addinv home to the navbar
    navBar.innerHTML = ("\
        <li class=\"nav-item px-3\">\
        <a class=\"nav-link\" href=\"#\">Home</a>\
        </li>");

    navBar.innerHTML+= ("\
        <li class=\"nav-item px-3\">\
        <a class=\"nav-link\" href=\"#\">Contact</a>\
        </li>");


    
    content.appendChild(navBar);

    return navBar;
}

export default loadNavBar;