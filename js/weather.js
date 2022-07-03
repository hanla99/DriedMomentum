const API_KEY = "53b256118415df00a0e848ef0c18a18c";

function onGeoDone(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const location = document.querySelector("#weather span:nth-child(3)");
      temperature.innerText = `${Math.round(data.main.temp)}°`;
      weather.innerText = data.weather[0]["main"];
      location.innerText = `@ ${data.name}`;
    });
}
function onGeoError() {
  console.log("error..");
}

navigator.geolocation.getCurrentPosition(onGeoDone, onGeoError);
