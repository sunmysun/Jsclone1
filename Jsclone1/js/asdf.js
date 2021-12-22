const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const ranColor = ["blue","red","green","yellow","black"];
    let num = Math.floor(Math.random() * ranColor.length);
    title.style.color = ranColor[num];
}
function handleMouseEnte(){
    title.innerText="Mouse is here~";
}
function handleMouseLeave(){
    title.innerText="Mouse isn't here..";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnte);
title.addEventListener("mouseleave", handleMouseLeave);