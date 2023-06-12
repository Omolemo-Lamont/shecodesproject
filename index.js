function showPosition(position) {
  let apiKey = `6f727a99c6dff687686c2d48cae1c86d`;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&appid=`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let heat = Math.round(response.data.main.temp);
  let city = response.data.name;
  let notification = `${city}°C`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = notification;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${heat}`;
}

navigator.geolocation.getCurrentPosition(showPosition);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let apiKey = `6f727a99c6dff687686c2d48cae1c86d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&appid=`;
  axios.get(apiUrl).then(showTemperature);
}

function displayCurrentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", displayCurrentTemp);