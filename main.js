const apikey = "d648a4c7258137f73a812e4f5aa9b730";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather-card").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
  
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-description").innerHTML = data.weather[0].description;
  
  if(data.weather[0].main == "Clouds"){
      weathericon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
      weathericon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
      weathericon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
      weathericon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
      weathericon.src = "images/mist.png";
  }
  
        document.querySelector(".weather-card").style.display = "block";
        document.querySelector(".error-message").style.display = "none";
    }
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});

searchbox.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        checkweather(searchbox.value);
    }
});
