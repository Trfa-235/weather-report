const apiKey = 'indiatoday';
const apiUrl = 'https://www.indiatoday.in/weather/ghaziabad-weather-forecast-today';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const endpoint = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

    showLoading();

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            hideLoading();
            alert('Error fetching weather data. Please try again.');
        });
}

function showLoading() {
    const weatherContainer = document.querySelector('.weather-container');
    weatherContainer.classList.remove('show');
}

function hideLoading() {
    const weatherContainer = document.querySelector('.weather-container');
    weatherContainer.classList.add('show');
}

function displayWeather(data) {
    const weatherResult 
