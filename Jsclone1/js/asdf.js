const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function btnclick(){
    const username = loginInput.value;
    if (username ===""){
        alert("Please Write your Name.");
    } else if(username.length > 15){
        alert("Your name is too long.");
    }
}

loginButton.addEventListener("click", btnclick);