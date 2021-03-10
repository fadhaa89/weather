 var citySearch;
 var apikey ="d028839cdc9a1c9698eac3bfe3105f91" ;
 var apicall ="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
 var apicompleteCall = apikey + apicall;
 console.log (apicompleteCall);
 
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

  function getWeather(search) {
    var queryURL = weatherAPI + "q=" + search + units + APIkey ;
    
    $.ajax({
        url: queryURL,
        method: "GET",
        statusCode: {
          404: function () {
            $("#current-forecast").hide();
            $("#five-day-forecast-container").hide();
            $("#error-div").show();
          },
        },
