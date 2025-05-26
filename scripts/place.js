// Footer year and last modified date
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
currentyear.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modification: " + document.lastModified;

// Static values for weather (should match your HTML)
const temperature = 30;    // "Current Temperature"
const windSpeed = 15;      // "Wind Speed"

// Wind Chill formula for Celsius and km/h
function calculateWindChill(tempC, speedKmh) {
    return Math.round(
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// Display or calculate wind chill as assignment requires
function displayWindChill() {
    let windChillDisplay = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillDisplay = calculateWindChill(temperature, windSpeed) + "°C";
    }
    const windChillSpan = document.getElementById("windchill-value");
    if (windChillSpan) windChillSpan.textContent = windChillDisplay;
}

window.addEventListener('DOMContentLoaded', displayWindChill);
