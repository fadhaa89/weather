//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//request /instruction how make a request

var cityName = "chicago";
//API KEY 
var APIkey = "d028839cdc9a1c9698eac3bfe3105f91";
//WEATHER API as it is
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
//this queryURL is as it is from the the web 
var queryURL = weatherAPI + cityName + "&appid=" + APIkey;
console.log(queryURL);

var getWeatherIcon = "http://openweathermap.org/img/wn/";

var searchHistoryArr = [];

var currentWeather = {};
var searchHistory = [];
var searchInput = '';
var forecastWeatherArr = [];
var cityState;

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
function search() {
    $("#search-button").on("click", function () {
      citySearch = $("#search-input").val().trim();

      if (citySearch === "") {
        return;
      }
      $("#search-input").val("");
      getWeather(citySearch);
    });
  }
//save the search history to local storage
function saveSearchHistory(searchInput) {
    searchHistory.push(searchInput);
    localStorage.setItem(LS_KEY, JSON.stringify(searchHistory));
}

//as soon html loads do this things :
//$(document).ready(function () {
    //init();
    //call the function by name
    //currentWeather();


