//feature 1

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let time = document.querySelector("#currentTime");
time.innerHTML = `${day} ${hour}:${minute}`;

//feature 2

function search(event) {
  event.preventDefault();
  let userCity = document.querySelector("#currentCityInput");
  let city = userCity.value;
  let apiKey = "066bofef7bb8949e6d3a0tc108390f79";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(changeCity);
}

function changeCity(response) {
  let newCity = response.data.city;
  let newTemp = Math.round(response.data.temperature.current);
  currentCity.innerHTML = `${newCity}`;
  cityTemp.innerHTML = `${newTemp}`;
}

let searchEngine = document.querySelector("#showCity");
searchEngine.addEventListener("submit", search);
