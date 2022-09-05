const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  if (date.getSeconds() < 10) {
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  } else {
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
getClock();
setInterval(getClock, 1000);
