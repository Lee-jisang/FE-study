// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");
// const API_KEY = "";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5142552&lon=126.898928&appid=&units=metric`;
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     city.innerText = data.name;
  //     weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  //   });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
//성공했을때 onGeoOk, 실패했을때, onGeoError
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
