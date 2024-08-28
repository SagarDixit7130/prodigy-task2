document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('get-location').value.trim();
    if (location === '') {
        alert('Please enter a location');
        return;
    }
    const apiKey = '4f6157202f872420ecfb0d48726c7b20'; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    


    fetch(url)
        // .then(response => response.json())
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)

            if (data.cod === 200) {
                document.getElementById('location-name').textContent = data.name;
                document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('weather-condition').textContent = `Condition: ${data.weather[0].description}`;
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data. Please try again later.');
        });
}