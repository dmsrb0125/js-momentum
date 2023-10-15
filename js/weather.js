const API_KEY="78e9ace00c38f0c21930e949408f036e"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temp = Math.ceil(`${data.main.temp-273}`);
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} /${temp}`;
      });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




   