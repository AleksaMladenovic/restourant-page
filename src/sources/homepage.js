import "./slideshow.js"
import { changeImage } from "./slideshow.js";

const HomePageHtml= document.querySelector(".content").innerHTML;
let IntervalId;

export function runHomepage(){
    document.querySelector(".content").innerHTML = HomePageHtml;
    document.querySelector("div.buttons button:nth-child(1)").classList.add("activeBtn");
    IntervalId = setInterval(changeImage, 5000);
}

export function closeHomepage(){
    clearInterval(IntervalId);
}