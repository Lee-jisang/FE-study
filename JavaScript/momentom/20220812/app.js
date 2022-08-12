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
