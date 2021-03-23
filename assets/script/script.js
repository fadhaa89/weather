//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}
//request /instruction how make a request
// need a function that grabs the city input and plugs that into the getWeather function, and a solution for CORS errors
var cityName = "chicago";
//API KEY 
var APIkey = "d028839cdc9a1c9698eac3bfe3105f91";
//WEATHER API as it is
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";

var lat = "41.8781";
var lon = "87.6298";
var forecastAPI = `api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIkey}`;
console.log(forecastAPI);
uviAPI = "https://api.openweathermap.org/data/2.5/uvi?lat=";
//this queryURL is as it is from the the web 
//var queryURL = weatherAPI + cityName + "&appid=" + APIkey;
//console.log(queryURL);
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var queryURL = corsProxy + forecastAPI;
console.log(queryURL);

var getWeatherIcon = "http://openweathermap.org/img/wn/";

var searchHistoryArr = [];

var currentWeather = {};
var searchHistory = [];
var searchInput = '';
var forecastWeatherArr = [];
var cityState;


function getWeather () {
  $.ajax ({
      url: queryURL,
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
        }, //to handle the cors error 
  }).then(function (response) {
      console.log(response)

      forecastWeatherArr = response;
      
      $("#temp").text(forecastWeatherArr.current.temp);//id is assigned-text function-
      $("#humidity").text(forecastWeatherArr.current.humidity);//id is assigned-text function-
      $("#windSpeed").text(forecastWeatherArr.current.wind_speed);//id is assigned-text function-
      $("#uvIndex").text(forecastWeatherArr.current.uvi);//id is assigned-text function-
      $("#description").text(description);//id is assigned-text function-
      $("#description").text(description);//id is assigned-text function-
  
  })
  
}

// search function
//whatever in city input its a value
function search() {
    console.log('running search function');
    cityName = $("#city-input").val();
    getWeather();
    return cityName 
};
///////////////////////////////////////////////////////////////////////
eventListeners = () => {
  $('#search-button').on('click', function (event) {
      event.preventDefault();
      search();
  })
}


//save the search history to local storage



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
$(document).ready(function (){
  eventListeners()
});