const apiKey = "89638d41ac4d76e85c0eca18872b79bb"; //FREE API key so keep here.
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// ex. https://api.openweathermap.org/data/2.5/weather?units=metric&q=tokyo&appid=89638d41ac4d76e85c0eca18872b79bb

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data)
    var f = Math.round(((data.main.temp) * 9/5) + 32)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" +` / ${f}°f`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

  }
searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value);
})


searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


const toggleButton = document.getElementById("toggle-dark-mode");
const darkModeCSS = document.getElementById("dark-mode-css");

toggleButton.addEventListener("click", () => {
  if (darkModeCSS.disabled) {
    darkModeCSS.disabled = false;
    toggleButton.textContent = "Light Mode";
  } else {
    darkModeCSS.disabled = true;
    toggleButton.textContent = "Dark Mode";
  }
});
