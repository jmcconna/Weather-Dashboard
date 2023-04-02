var APIkey = "d836aceed21f5a7a366ca28c985b1c82";
var APIkey2 = "92fda5835042abcdaf25203fe3fe8041";

var city = "atlanta";
var state;
var country;

var weatherToday = document.getElementById("weatherToday");

var locationTextInput = document.getElementById("weatherLocation");
console.log(locationTextInput);
var submitButton = document.getElementById("submitBut");
console.log(submitButton);

function queryOpenWeather(){
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIkey+"&units=imperial";
fetch(queryURL)
.then(function (response) {
 return response.json();
})
.then(function(data){
    console.log('Weather data for '+city);
    console.log(data);
    
    weatherToday.children[0].textContent = data.name;
    weatherToday.children[1].textContent = "Temp: " +data.main.temp +" °F";
    weatherToday.children[2].textContent = "Wind: "+data.wind.speed +" mph";
    weatherToday.children[3].textContent = "Humidity: "+data.main.humidity +"%";

})
}

submitButton.addEventListener("click", function() {
event.preventDefault();
console.log(locationTextInput.value);
city = locationTextInput.value;
console.log(city);
queryOpenWeather();
});

queryOpenWeather();
