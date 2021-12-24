const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const h2 = document.querySelector("#clock");
const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`;

document.body.insertBefore(bgImage,h2);
