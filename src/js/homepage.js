function loadhomepage(){
    const content = document.getElementById("content");
    const homePageImg = document.createElement("img");

    homePageImg.src = "/images/pizzaSlice.png";
    homePageImg.alt = "a slice of pixalated pizza";
    homePageImg.className = "homePizza";

    const homePageHeading = document.createElement("h1");
    homePageHeading.innerHTML = "Welcome to pepperinos pizza";
    homePageHeading.className = "homePageHeading";

    const pizzaDesc = document.createElement("div");
    pizzaDesc.innerHTML = "We hope you enjoy our AUTHENTIC ITALIAN CUSINE!<BR> MAMMA MIA, THAT'S A SPICY MEATABOL";
    pizzaDesc.className = "homeCopy";


    

    content.appendChild(homePageImg);
    content.appendChild(homePageHeading);
    content.appendChild(pizzaDesc);
    return homePageImg;
}

export default loadhomepage;