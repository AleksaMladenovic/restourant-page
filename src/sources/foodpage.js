import StakeOnGrill from "../imgs/steakongrill.jpg";

import Gulas from "../imgs/recepies/gulas.jpg";
import Pljeskavica from "../imgs/recepies/pljeskavica.jpg";
import Sarma from "../imgs/recepies/sarma.jpg";
import Campfire from "../imgs/recepies/CampfireLambPeka.webp";

const menuList = [
    {
        img: Pljeskavica,
        title: "PLJESKAVICA",
        description: "Pljeskavica is a popular Balkan dish made from ground beef, pork, or a mix of both, seasoned with various spices. The meat is shaped into a patty and grilled, often served in a pita or bun with toppings like onions, cheese, and ajvar. It’s a flavorful and satisfying meal, commonly enjoyed as fast food or at barbecues.",
    },
    {
        img: Gulas,
        title: "GULAŠ",
        description: "Goulash is a hearty stew, typically made with beef or pork, simmered with onions, paprika, and various spices. Originating from Hungary, it is known for its rich, savory flavor and is often served with bread, dumplings, or potatoes. The dish can vary in thickness, from a soup-like consistency to a thicker stew.",
    },
    {
        img: Sarma,
        title: "SARMA",
        description: "Sarma is a traditional Serbian dish made of ground meat (usually pork or beef), rice, spices, and onions, all wrapped in sour cabbage leaves. It is typically slow-cooked in a rich tomato-based sauce, which gives it a distinct and savory flavor. Sarma is a favorite during the winter months and is often prepared for holidays, served with sides like sour cream or spicy ajvar. It benefits from long cooking times, as it becomes more flavorful the longer it sits.",
    },
    {
        img: Campfire,
        title: "Campfire Lamb Peka",
        description: "Campfire Lamb Peka is a traditional Balkan dish where lamb is slow-cooked under a metal bell-shaped lid (sač), surrounded by hot coals. The meat is seasoned with herbs, garlic, and spices, then slow-roasted along with vegetables like potatoes, carrots, and onions. This cooking method results in tender, flavorful meat with a smoky, rich taste, making it a perfect dish for outdoor gatherings or special occasions.",
    }
]

export function runFoodPage(){
    document.querySelector("div.buttons button:nth-child(2)").classList.add("activeBtn");

    const divContent = document.querySelector(".content");
    divContent.innerHTML = "";

    //div mainSlide
    const divMainSlide = document.createElement("div");
    divMainSlide.classList.add("mainSlide");
    
    const divMainImage = document.createElement("div");
    divMainImage.classList.add("mainImage");
    divMainSlide.appendChild(divMainImage);
    
    const imgStake = document.createElement("img");
    imgStake.setAttribute("src",StakeOnGrill);
    imgStake.setAttribute("alt","photo of restourant interier");
    divMainImage.appendChild(imgStake);
    
    const divWelcomeText = document.createElement("div");
    divWelcomeText.classList.add("welcomeText");
    const pFood = document.createElement("p");
    pFood.classList.add("food");
    pFood.textContent = "FOOD";

    divWelcomeText.appendChild(pFood);
    divMainSlide.appendChild(divWelcomeText);

    divContent.appendChild(divMainSlide);

    //div discover
    const divDiscover = document.createElement("div");
    divDiscover.classList.add("discover");

    let p = document.createElement("p");
    p.textContent = "DISCOVER";
    divDiscover.appendChild(p);

    p = document.createElement("p");
    p.textContent = "OUR MENU";
    divDiscover.appendChild(p);

    p = document.createElement("p");
    p.textContent = "Join us on a journey to an enchanting realm where flavourd unveil the deep msteries of ancient times and timeless traditions. This culinary adventure is an essential joy for your spirit and a sensory experience that should not be missused.";
    divDiscover.appendChild(p);

    divContent.appendChild(divDiscover);

    //div menu
    const divMenu = document.createElement("div");
    divMenu.className = "menu";

    menuList.forEach(element => {
        let divItem = document.createElement("div");
        divItem.className = "item";
        divMenu.appendChild(divItem);

        let divImg = document.createElement("div");
        divImg.className = "divImg";
        divItem.appendChild(divImg);

        let img = document.createElement("img");
        img.setAttribute("src",element.img);
        divImg.appendChild(img);

        let title = document.createElement("h2");
        title.textContent = element.title;
        divItem.appendChild(title);

        let description = document.createElement("p");
        description.textContent = element.description;
        divItem.appendChild(description);
    });

    divContent.appendChild(divMenu);
}