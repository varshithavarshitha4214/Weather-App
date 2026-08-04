const apiKey = "ef353c7cead2583d539eb40640342e72";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

const city=document.getElementById("city").value.trim();

const result=document.getElementById("result");

if(city===""){
result.innerHTML="<p>Please enter a city name.</p>";
return;
}

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

if(data.cod=="404"){
result.innerHTML="<p>❌ City not found.</p>";
return;
}

result.innerHTML=`
<h2>${data.name}</h2>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
`;

}
catch(error){
result.innerHTML="<p>Something went wrong. Please try again.</p>";
}

}