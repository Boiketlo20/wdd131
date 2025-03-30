const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

console.log(today.getFullYear()); 
console.log(document.lastModified);

function calculateWindChill(temperature, windSpeed){
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill * 10) / 10; 
    } else {
        return "N/A";
    }
   
}

document.addEventListener("DOMContentLoaded", () => {
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("wind-chill").textContent = windChill;
});