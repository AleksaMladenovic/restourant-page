import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import img4 from "../imgs/restourant.jpeg";

//slideshow for photos
    const images = [];
    images.push(img1);
    images.push(img2);
    images.push(img3);
    images.push(img4);

    let currentIndex = 0;

    export function changeImage() {
    const slideshow = document.querySelector("#slideshow");
    if(slideshow!==null){
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.src = images[currentIndex];
            slideshow.style.opacity = 0.5;
        }, 250);
        setTimeout(() => {
            slideshow.style.opacity = 1;
        }, 250);
        }
    }

    