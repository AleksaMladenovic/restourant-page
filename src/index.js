import "./styles.css";
import "./sources/styckyNav.js"
import { runHomepage, closeHomepage } from "./sources/homepage.js";
import { runFoodPage } from "./sources/foodpage.js";
import { runContactpage } from "./sources/contactpage.js";

runHomepage();

document.querySelector("div.buttons button:nth-child(1)").addEventListener("click",()=>{
    closePages();
    runHomepage();
});
document.querySelector("div.buttons button:nth-child(2)").addEventListener("click",()=>{
    closePages();
    runFoodPage();
});
document.querySelector("div.buttons button:nth-child(3)").addEventListener("click",()=>{
    closePages();
    runContactpage();
});

function closePages(){
    [...document.querySelectorAll("div.buttons button")].forEach((e)=>{
        e.classList.remove("activeBtn");
    });
    closeHomepage();
}