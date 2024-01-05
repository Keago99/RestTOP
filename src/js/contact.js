function loadContact(){
    const content = document.getElementById("content");
    const contactPage = document.createElement("div");
    contactPage.className = "inCenter";

    contactPage.innerHTML = "\
    <div class=\"card\" style=\"width: 18rem;\">\
    <img class=\"card-img-top\" src=\"/images/pizzaSlice.png\" alt=\"Card image cap\">\
    <div class=\"card-body\">\
      <h5 class=\"card-title\">Contact us!</h5>\
      <p class=\"card-text\">Please contact us should you have any queries or concerns.</p>\
    </div>\
    <ul class=\"list-group list-group-flush\">\
      <li class=\"list-group-item\">Landline: 7012384703128708</li>\
      <li class=\"list-group-item\">Email: Pizzarus@gmail.com</li>\
    </ul>\
    </div>";

    content.appendChild(contactPage);
    console.log("the Contact page has been loaded!");
    return;
}


export default loadContact;