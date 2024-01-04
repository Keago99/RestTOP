function loadMenu(){
    const content = document.getElementById("content");

    const menuCard = document.createElement("div");

    menuCard.innerHTML = "\
    <div class=\"card inCenter\" style=\"width: 18rem;\">\
    <img class=\"card-img-top\" src=\"/images/pizzaSlice.png\" alt=\"Card image cap\">\
    <div class=\"card-body\">\
      <h5 class=\"card-title\">Our menu!</h5>\
      <p class=\"card-text\">Chose from our delicious pizzas.</p>\
    </div>\
    <ul class=\"list-group list-group-flush\">\
      <li class=\"list-group-item\">Something Meaty</li>\
      <li class=\"list-group-item\">Californian</li>\
      <li class=\"list-group-item\">Chicken Supreme</li>\
    </ul>\
    </div>";
    
    content.appendChild(menuCard);
    console.log("the menu has been loaded!");
}

export default loadMenu;