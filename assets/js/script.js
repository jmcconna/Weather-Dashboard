var APIkey = "d836aceed21f5a7a366ca28c985b1c82";
var APIkey2 = "92fda5835042abcdaf25203fe3fe8041";

var city = "atlanta";
var state;
var country;
var lat;
var lon;

var weatherToday = document.getElementById("weatherToday");
var fiveDayForecast = document.getElementById("fiveDayForecast");

var locationTextInput = document.getElementById("weatherLocation");
console.log(locationTextInput);
var submitButton = document.getElementById("submitBut");
console.log(submitButton);

function queryOpenWeather(){
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIkey+"&units=imperial";
fetch(queryURL)
.then(function (response) {
 return response.json();
})
.then(function(data){
    console.log('Weather data for '+city);
    console.log(data);
    let unix_timestamp = data.dt;
    var date = new Date(unix_timestamp *1000).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    //var formattedDate = date.getDate();
    
    weatherToday.children[0].textContent = data.name;
    weatherToday.children[1].textContent = date;
    weatherToday.children[2].textContent = "Temp: " +data.main.temp +" °F";
    weatherToday.children[3].textContent = "Wind: "+data.wind.speed +" mph";
    weatherToday.children[4].textContent = "Humidity: "+data.main.humidity +"%";
    lat = data.coord.lat;
    console.log(lat);
    lon = data.coord.lon;
    console.log(lon);
    fiveDayQueryOpenWeather();
})
}

function fiveDayQueryOpenWeather(){
    //5-day forecast
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.
var fiveDayqueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+APIkey+"&units=imperial";  
fetch(fiveDayqueryURL)
.then(function (response) {
    return response.json();
   })

.then(function(data){
    console.log('5 day Weather data for '+city);
    console.log(data);

}
)
}



submitButton.addEventListener("click", function() {
event.preventDefault();
console.log(locationTextInput.value);
city = locationTextInput.value;
console.log(city);
queryOpenWeather();
fiveDayQueryOpenWeather();
});

queryOpenWeather();

