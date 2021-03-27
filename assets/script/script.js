
var cityName;
//API KEY 
var APIkey = "d028839cdc9a1c9698eac3bfe3105f91";
var todayWeatherApi = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
//WEATHER API as it one day weather//
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var today = (moment().format('ddd, MMMM DD, YYYY'));
var lat;
var lon;

//5day 
var forecastAPI = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIkey}`;
console.log(forecastAPI);

//this queryURL is as it is from the the web 
// var queryURL = weatherAPI + cityName + "&appid=" + APIkey;
//console.log(queryURL);
var corsProxy = "http://cors-anywhere.herokuapp.com/";
var queryURL = corsProxy + forecastAPI;
console.log(queryURL);
var getWeatherIcon = "http://openweathermap.org/img/wn/";
var searchHistoryArr = [];
var currentWeather = {};
var searchHistory = [];
var searchInput = '';
var forecastArray = [];
var cityState;
var todayWeather ={};

function getCity(){
cityName = $("#searchCityBar").val();
console.log("cityName:"+ cityName)
return cityName;
}

appendForecast = (forecastArray) => {
  console.log("Running appendForecast function on this array:", forecastArray);
  $('#forecast').empty();
  for (i=0; i < forecastArray.length - 3; i++) {
      let dayWeatherObj = forecastArray[i];
      console.log("dayWeatherObj", dayWeatherObj);
      let UTCday = dayWeatherObj.dt;
      let day = new Date(UTCday*1000);
      let shortDay = (moment(day).format('ddd MMMM Do'));
      let iconImage = `http://openweathermap.org/img/wn/${dayWeatherObj.weather[0].icon}@2x.png`;
      $('#forecast').append(
          `<div class="card" style="width: 20%;">
              <img src="${iconImage}" class="card-img-top mt-3" alt="weather icon" style="width:80px; margin:auto">
                  <div class="card-body">
                      <h5 class="card-title">${shortDay}</h5>
                      <p class="card-text">Temperature: ${dayWeatherObj.humidity}F<br>
                      Humidity: ${dayWeatherObj.humidity}%</p>
                  </div>
          </div>`)
  }
}


function getWeather () {
 cityName = getCity();
  console.log('getWeather')
  $.ajax ({
      url:`${corsProxy}api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIkey}`,
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
        }, //to handle the cors error 
  }).then(function (response) {
      todayWeather = response;
      console.log('response',response);
      lat=todayWeather.coord.lat;
      lon=todayWeather.coord.lon;

      $("#temp").text(todayWeather.main.temp);//id is assigned-text function-
      $("#humidity").text(todayWeather.main.humidity);//id is assigned-text function-
      $("#windSpeed").text(todayWeather.wind.speed);//id is assigned-text function-
      // $("#uvIndex").text(todayWeather.current.uvi);//id is assigned-text function-

//       /////////////////////////////////////////////////////////////////////////////////
//       for (let index = 0; index < 5; index++) { //forloop for 5days weather /
//       var card = document.createElement("div").setAttribute("class","card")//div and clSS NAME IS CREATED 
//       var image =document.createElement("div").classList.add("card-img-top", "mt-3")
//       image.setAttribute("src", weatherIconURL) //set the src attribute of ur img tag
//       card.append(image);

//       }
     
//   })
  
// }
/////////////////////////////////////////////////////////////////////
}).then(()=>{
// fetch(forecastAPI)
$.ajax ({
  url:`${corsProxy}http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIkey}`,
  method: "GET",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
    }, //to handle the cors error 
})
.then((response2) => {
  console.log('response2',response2)
  forecastArray = response2.daily;
  appendForecast(forecastArray);
    // for (let i = 0; i < forecastArray.length; i++) {
        // console.log(forecast.list[i].dt_txt.split(" ")[1]);
        // if (forecast.list[i].dt_txt.split(" ")[1] === "12:00:00") {
        //     console.log(forecast.list[i]);
        //     document.getElementById(
        //         "day-" + day + "-h5"
        //     ).textContent = forecast.list[i].dt_txt.split(" ")[0];
        //     document.getElementById("temp-" + day).textContent =
        //         (forecast.list[i].main.temp * (9 / 5) - 459.67).toFixed(0) + "F";
        //     document.getElementById("humidity-" + day).textContent =
        //         forecast.list[i].main.humidity + "humidity";
        //     // document.getElementById("weather-" + day).textContent =
        //     //     forecast.list[i].main.weather;
        //     day++;
        // }
    // }
});
})

}
function search() {
    console.log('running search function');
   
 
    return cityName 
};

//   eventListeners()

  $('#search-button').on('click', function (event) {
    console.log('search-button')
      event.preventDefault();
      
      getWeather(cityName);
  })
// let currentData;

// function uvindex(uv) {
// console.log("uv is " + JSON.stringify(uv));
// if (uv < 3) {
// $('#current-uv').css('uv-low') //green
// } else if (uv > 2 && uv < 6) {
// $('#current-uv').css('uv-mod-lo') //yellow
// } else if (uv > 5 && uv < 8) {
// $('#current-uv').css('uv-mod-hi') //orange   
// } else if (uv > 7 && uv < 10) {
// $('#current-uv').css('uv-severe-lo') //red
// } else if (uv > 9) {
// $('#current-uv').css('uv-severe-hi') //purple
// } else {
// $('#current-uv').css('uv-low') //green
// }
// }
// $(document).ready(function (){