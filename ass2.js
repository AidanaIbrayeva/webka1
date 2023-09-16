document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const locationValue = document.getElementById('locationValue');
            const temperatureValue = document.getElementById('temperatureValue');
            const conditionValue = document.getElementById('conditionValue');

            locationValue.textContent = data.name;
            temperatureValue.textContent = `${data.main.temp} °C`;
            conditionValue.textContent = data.weather[0].description;
        })
        .catch(error => console.error('Error:', error));
}
