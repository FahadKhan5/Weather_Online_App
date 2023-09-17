const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const weather = document.getElementById("weather");
const form = document.querySelector("form");
const search = document.getElementById("search");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h2> Opss! City Not Found...</h2>`;
    return;
  }
  weather.innerHTML = `
    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
      <h2>${data.main.temp} °C</h2>
      <h4>${data.weather[0].main}</h4>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Visibility: ${data.visibility} meters</p>
      <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  //console.log(search.value);
  event.preventDefault();
});
