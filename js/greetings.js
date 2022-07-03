const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingBox = document.querySelector("#greeting-box");
const greetingBtn = document.querySelector(".greeting-btn");
const greetingMenu = document.querySelector(".greeting-menu");
const greetingContainer = document.querySelector("#greeting-menu-container");
const logOut = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const inputUsername = loginInput.value.trim();
  localStorage.setItem(USERNAME_KEY, inputUsername);
  // paintGreetings(inputUsername);
  location.reload();
}

function paintGreetings(userame) {
  greeting.innerText = `Hello, ${userame}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the gretting
  paintGreetings(savedUsername);
}

function handleGreetingHover() {
  greetingBtn.classList.remove("hidden");
}

function handleGreetingOut() {
  if (greetingContainer.classList.contains("hidden")) {
    greetingBtn.classList.add("hidden");
  }
}

greetingBox.addEventListener("mouseover", handleGreetingHover);
greetingBox.addEventListener("mouseout", handleGreetingOut);

function handleBtnClick() {
  greetingContainer.classList.remove("hidden");
  greetingMenu.classList.remove("hidden");
}

function handleContainerClick() {
  greetingMenu.classList.add("hidden");
  greetingContainer.classList.add("hidden");
}

function handleLogOut() {
  localStorage.removeItem("username");
  location.reload();
}

greetingBtn.addEventListener("click", handleBtnClick);
greetingContainer.addEventListener("click", handleContainerClick);

logOut.addEventListener("click", handleLogOut);
