var APIkey = "d836aceed21f5a7a366ca28c985b1c82";
var APIkey2 = "92fda5835042abcdaf25203fe3fe8041";

var city = "vienna";
var state;
var country;

var locationTextInput = document.getElementById("weatherLocation");
var submitButton = document.getElementById("submitBut");

function queryOpenWeather(){
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIkey2;
var data = fetch(queryURL);
console.log(data);
}

submitButton.addEventListener("click", function() {
city = locationTextInput.value;
console.log(city);
queryOpenWeather();
});


