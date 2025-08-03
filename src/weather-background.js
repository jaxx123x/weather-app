const weatherImages = {
    'clear-day': '/imgs/Sunny-day.jpeg',
    'clear-night': '/imgs/Clear-night.jpeg',
    'sunny': '/imgs/Sunny-day.jpeg',
    'cloudy': '/imgs/Mostly-cloudy.jpeg',
    'partly-cloudy-day': '/imgs/Partly-cloudy.jpeg',
    'partly-cloudy-night': '/imgs/Partly-cloudy.jpeg',
    'overcast': '/imgs/Mostly-cloudy.jpeg',
    'rain': '/imgs/Heavy-rain.jpeg',
    'showers-day': '/imgs/Rain and Snow.jpeg',
    'showers-night': '/imgs/Rain and Snow.jpeg',
    'thunderstorm': '/imgs/Thunderstorm.jpeg',
    'heavy-rain': '/imgs/Heavy-rain.jpeg',
    'snow': '/imgs/Snow.jpeg',
    'snow-showers-day': '/imgs/Snow.jpeg',
    'snow-showers-night': '/imgs/Snow.jpeg',
    'sleet': '/imgs/Sleet.jpeg',
    'drizzle': '/imgs/Drizzle.jpeg',
    'light-rain': '/imgs/Drizzle.jpeg',
    'wind': '/imgs/Squalls.jpeg',
    'squalls': '/imgs/Squalls.jpeg',
    'default': '/imgs/Snow.jpeg'
};

export function setWeatherBackground(icon) {
    const img = weatherImages[icon] || weatherImages['default'];
    document.body.style.backgroundImage = `url('${img}')`;
}