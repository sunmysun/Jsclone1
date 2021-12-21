const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const ranColor = ["blue","red","green","yellow","black"];
    let num = Math.floor(Math.random() * ranColor.length);
    title.style.color = ranColor[num];
}

title.addEventListener("click", handleTitleClick);

