const ddTemperature = document.getElementById('temperature');
const ddConditions = document.getElementById('conditions');
const ddHumidity = document.getElementById('humidity');
const ddWindSpeed = document.getElementById('windSpeed');
const ddWindChill = document.getElementById('windChill');

const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = lastModified;

const weatherData = {
    temperature: 5.00,
    unitMeassure: "°C",
    conditions: "Partly Cloudy",
    humidity: 0.70,
    windSpeed: 6,
    windSpeedUnit: "km/h",
}

ddTemperature.innerText = `${weatherData.temperature}${weatherData.unitMeassure}`;
ddConditions.innerText = weatherData.conditions;
ddHumidity.innerText = `${weatherData.humidity * 100}%`;
ddWindSpeed.innerText = `${weatherData.windSpeed} ${weatherData.windSpeedUnit}`;

function calculateWindChill(temp, windSpeed, unit = "°C") {
    return unit === "°C" 
        ? +(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)
        : +(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

const isWindChillApplicable = (weatherData.unitMeassure === "°C" && weatherData.temperature <= 10 && weatherData.windSpeed > 4.8) ||
                             (weatherData.unitMeassure === "°F" && weatherData.temperature <= 50 && weatherData.windSpeed > 3);

if (isWindChillApplicable) {
    const windChill = calculateWindChill(weatherData.temperature,weatherData.windSpeed, weatherData.unitMeassure);
    ddWindChill.innerText = `${windChill}${weatherData.unitMeassure}`
} else {
    ddWindChill.innerText = "N/A";
}
