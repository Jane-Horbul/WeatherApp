const weatherMap = {
    "Clear": "CLEAR_DAY",
    "Clear-night": "CLEAR_NIGHT",
    "Partly-cloudy-day": "PARTLY_CLOUDY_DAY",
    "Partly-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    "Clouds": "CLOUDY",
    "Rain": "RAIN",
    "Sleet": "SLEET",
    "Snow": "SNOW",
    "Wind": "WIND",
    "Fog": "FOG",
};

function setIcon(data, iconID) {
        const skycons = new Skycons({color:"white"});
        const currentIcon = data.weather[0].main;
        skycons.play();
        return skycons.set(iconID, Skycons[weatherMap[currentIcon]]);
    }


window.addEventListener('load', ()=> {
    let long;
    let lat;
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDiscription = document.querySelector(".temperature-discription");
    let icon;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';


        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {

            temperatureDegree.textContent = data.main.temp;
            locationTimezone.textContent = data.name;
            temperatureDiscription.textContent = data.weather[0].description;
            

            setIcon(data, document.querySelector('.icon'));
        });
     });
    }

    
    
});



