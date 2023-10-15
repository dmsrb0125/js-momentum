const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수를 저장할때 대문자로 표기(관행 o 필수 x)
const USERNAME_KEY = "username";

function paintGreentings(i){
    greeting.innerText = `Hello ${i}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    paintGreentings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit) ;
} else{
    greeting.innerText = `Hello ${savedUsername}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreentings(savedUsername);
}




