var APIkey = "d836aceed21f5a7a366ca28c985b1c82";
var APIkey2 = "92fda5835042abcdaf25203fe3fe8041";

var city = "Orlando";
var state;
var country;
var lat;
var lon;
var oldCityButtons =["Orlando"];

var weatherToday = document.getElementById("weatherToday");
var fiveDayForecast = document.getElementById("fiveDayForecast");
var locationTextInput = document.getElementById("weatherLocation");
var submitButton = document.getElementById("submitBut");
var buttonColumn = document.getElementById("buttonColumn");

//query the open weather database for the current day's weather
function queryOpenWeather(){
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIkey+"&units=imperial";
fetch(queryURL)
.then(function (response) {
//if they type in a location name (or random string) that doesn't work with the openweather API
    if(response.status !==200){
     alert("Sorry! We couldn't find a city by that name. Please try entering the name of the city again.");
     return;   
} else if (response.status === 200)
{createNewButton();}

 return response.json();
})
.then(function(data){
   
    //format the date
    let unix_timestamp = data.dt;
    var date = new Date(unix_timestamp *1000).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
    //retrieve and decode the weather icon
    var iconCode = data.weather[0].icon;
    var iconElement = "<img src='https://openweathermap.org/img/wn/"+iconCode+"@2x.png' alt='Weather Icon'>";

    //assign all the data to DOM elements
    weatherToday.children[0].textContent = data.name;
    weatherToday.children[1].textContent = date;
    weatherToday.children[2].innerHTML=iconElement;
    weatherToday.children[3].textContent = "Temp: " +data.main.temp +" °F";
    weatherToday.children[4].textContent = "Wind: "+data.wind.speed +" mph";
    weatherToday.children[5].textContent = "Humidity: "+data.main.humidity +"%";
    //grad the lat and lon coordinates for the city to pass to a second query for 5-day weather
    lat = data.coord.lat;
    lon = data.coord.lon;
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
    
    //grab the data for each of the 5 days and assign the values to the DOM elements
    let unix_timestamp1 = data.list[6].dt;
    var date1 = new Date(unix_timestamp1 *1000).toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"});
    var iconCode1 = data.list[6].weather[0].icon;
    var iconElement1 = "<img src='https://openweathermap.org/img/wn/"+iconCode1+".png' alt='Weather Icon'>";
    fiveDayForecast.children[0].children[0].textContent = date1;
    fiveDayForecast.children[0].children[1].innerHTML=iconElement1;
    fiveDayForecast.children[0].children[2].textContent = "Temp: "+data.list[6].main.temp+" °F";
    fiveDayForecast.children[0].children[3].textContent = "Wind: "+data.list[6].wind.speed +" mph";
    fiveDayForecast.children[0].children[4].textContent = "Humidity: "+data.list[6].main.humidity+"%";

    let unix_timestamp2 = data.list[14].dt;
    var date2 = new Date(unix_timestamp2 *1000).toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"});
    var iconCode1 = data.list[14].weather[0].icon;
    var iconElement1 = "<img src='https://openweathermap.org/img/wn/"+iconCode1+".png' alt='Weather Icon'>";
    fiveDayForecast.children[1].children[0].textContent = date2;
    fiveDayForecast.children[1].children[1].innerHTML=iconElement1;
    fiveDayForecast.children[1].children[2].textContent = "Temp: "+data.list[14].main.temp+" °F";
    fiveDayForecast.children[1].children[3].textContent = "Wind: "+data.list[14].wind.speed +" mph";
    fiveDayForecast.children[1].children[4].textContent = "Humidity: "+data.list[14].main.humidity+"%";

    let unix_timestamp3 = data.list[22].dt;
    var date3 = new Date(unix_timestamp3 *1000).toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"});
    var iconCode1 = data.list[22].weather[0].icon;
    var iconElement1 = "<img src='https://openweathermap.org/img/wn/"+iconCode1+".png' alt='Weather Icon'>";
    fiveDayForecast.children[2].children[0].textContent = date3;
    fiveDayForecast.children[2].children[1].innerHTML=iconElement1;
    fiveDayForecast.children[2].children[2].textContent = "Temp: "+data.list[22].main.temp+" °F";
    fiveDayForecast.children[2].children[3].textContent = "Wind: "+data.list[22].wind.speed +" mph";
    fiveDayForecast.children[2].children[4].textContent = "Humidity: "+data.list[22].main.humidity+"%";

    let unix_timestamp4 = data.list[30].dt;
    var date4 = new Date(unix_timestamp4 *1000).toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"});
    var iconCode1 = data.list[30].weather[0].icon;
    var iconElement1 = "<img src='https://openweathermap.org/img/wn/"+iconCode1+".png' alt='Weather Icon'>";
    fiveDayForecast.children[3].children[0].textContent = date4;
    fiveDayForecast.children[3].children[1].innerHTML=iconElement1;
    fiveDayForecast.children[3].children[2].textContent = "Temp: "+data.list[30].main.temp+" °F";
    fiveDayForecast.children[3].children[3].textContent = "Wind: "+data.list[30].wind.speed +" mph";
    fiveDayForecast.children[3].children[4].textContent = "Humidity: "+data.list[30].main.humidity+"%";

    let unix_timestamp5 = data.list[38].dt;
    var date5 = new Date(unix_timestamp5 *1000).toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"});
    var iconCode1 = data.list[38].weather[0].icon;
    var iconElement1 = "<img src='https://openweathermap.org/img/wn/"+iconCode1+".png' alt='Weather Icon'>";
    fiveDayForecast.children[4].children[0].textContent = date5;
    fiveDayForecast.children[4].children[1].innerHTML=iconElement1;
    fiveDayForecast.children[4].children[2].textContent = "Temp: "+data.list[38].main.temp+" °F";
    fiveDayForecast.children[4].children[3].textContent = "Wind: "+data.list[38].wind.speed +" mph";
    fiveDayForecast.children[4].children[4].textContent = "Humidity: "+data.list[38].main.humidity+"%";

}
)
}


//event listener added here for the submit button, which also triggers local storage
submitButton.addEventListener("click", function() {
event.preventDefault();
console.log(locationTextInput.value);
city = locationTextInput.value;



queryOpenWeather();
fiveDayQueryOpenWeather();
});


function createNewButton() {

//check if we have already added this city to the list before
if(oldCityButtons.includes(city)) {
    console.log("Duplicate city");
    return;}

//retrieve "lastCity" from local storage and create a grey button
var lastCity = JSON.parse(localStorage.getItem("lastCity"));
if(lastCity !== null) {   
//create new button
var newButton = document.createElement("button");
newButton.classList.add("btn-primary");
newButton.classList.add("btn");
//newButton.classList.add("raised");
newButton.classList.add("greyed");
//assign the city name as the value for the button
newButton.innerText = lastCity;
//add an event listener
newButton.addEventListener('click', () => {
city = lastCity;
queryOpenWeather();
})
//append the new button to the parent DOM
buttonColumn.appendChild(newButton);
}
//update the local storage to put the current city as "lastCity"
localStorage.setItem("lastCity",JSON.stringify(city));

//add the city to the array of old cities 
oldCityButtons.push(city);
}

queryOpenWeather();

