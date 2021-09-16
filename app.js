window.addEventListener('load', ()=> {
    let long;
    let lat;
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDiscription = document.querySelector(".temperature-discription");

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
            //console.log(data);
            temperatureDegree.textContent = data.main.temp;
            //console.log (temperatureDegree);
            locationTimezone.textContent = data.name
            //console.log(locationTimezone);
            temperatureDiscription.textContent = data.weather[0].description;
         });
     });

    }
});



