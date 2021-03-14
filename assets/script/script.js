//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//request /instruction how make a request
// need a function that grabs the city input and plugs that into the getWeather function, and a solution for CORS errors
var cityName = "chicago";
//API KEY 
var APIkey = "d028839cdc9a1c9698eac3bfe3105f91";
//WEATHER API as it is
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
uviAPI = "https://api.openweathermap.org/data/2.5/uvi?lat=";
//this queryURL is as it is from the the web 
//var queryURL = weatherAPI + cityName + "&appid=" + APIkey;
//console.log(queryURL);
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var queryURL = corsProxy + weatherAPI + cityName + "&appid=" + APIkey;
console.log(queryURL);

var getWeatherIcon = "http://openweathermap.org/img/wn/";

var searchHistoryArr = [];

var currentWeather = {};
var searchHistory = [];
var searchInput = '';
var forecastWeatherArr = [];
var cityState;

eventListeners = () => {
  $('#search-button').on('click', function (event) {
      event.preventDefault();
      search();

  })
}

//ajax fot currentweather to get the current weather feom openwaether.
//define the function -
function currentWeather () {
    $.ajax ({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        $("#error-div").hide();
      $("#current-forecast").show();
      $("#five-day-forecast-container").show();
        
    })
    
}
// search function
//whatever in city input its a value

function search() {
      cityName = $("#city-input").val().trim();
      alert(cityName);// val not a string 
    };

  // get the city
  getCity = () => {
    console.log("Running getCity function.");
    cityName = $('#city').val();
    return cityName
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