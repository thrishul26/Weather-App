const apiKey = "e9deec758c70447ec5c3d85d8d7b7655";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
checkWeather("canada");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector("#one").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector("#second").innerHTML = data.main.humidity + " %";
    document.querySelector("#third").innerHTML = data.wind.speed + " km/hr";
    document.querySelector("#name").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector("#min_temp").innerHTML = data.main.temp_min + " °c";
    document.querySelector("#max_temp").innerHTML = data.main.temp_max + " °c";
    document.querySelector("#wind_degree").innerHTML = data.wind.deg;
    document.querySelector("#feels_like").innerHTML = data.main.feels_like;
    document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
    document.querySelector("#wind_speed").innerHTML = data.wind.speed + " km/hr";
    document.querySelector("#sunrise").innerHTML = data.sys.sunrise;
    document.querySelector("#sunset").innerHTML = data.sys.sunset;

}

document.querySelector("#submit").onclick = function () {
    var city = document.querySelector("#search").value;
    checkWeather(city);
}


