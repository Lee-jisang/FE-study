const title = document.querySelector(".title"); //querySelector
console.log(title);

const h2 = document.querySelector(".hello h2");
console.log(h2);

function handleTitle() {
  title.classList.toggle("active");
}

title.addEventListener("click", handleTitle);

let clickMode = false;
function clickEvent() {
  clickMode = !clickMode;
  clickMode ? (h2.className = "active") : (h2.className = "");
}
h2.addEventListener("click", clickEvent);

let mode = false;
function changeMode() {
  mode = !mode;
  if (mode) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  }
  mode ? console.log(mode) : console.log(mode);
}

const loginForm = document.querySelector("#login-form"); // document.getElementById("login-form");
console.log(loginForm);
const loginInput = document.querySelector("#login-form input");

function onLoginsubmit(a) {
  const userName = loginInput.value;
  a.preventDefault(); //이벤트의 기본행동이 출력되지 않게 막아줌
  console.log(a);
}

loginForm.addEventListener("submit", onLoginsubmit);
