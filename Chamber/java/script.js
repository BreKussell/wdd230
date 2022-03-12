// mobile navigation 
function mobileNav() {
  var x = document.getElementById("navigation");
  if (x.className === "mobileNavigation") {
    x.className += " responsive";
  } else {
    x.className = "mobileNavigation";
  }
}



// date function at top of page
// Get the input from computer's clock.
const now = new Date();
//full month name
let monthName = now.toLocaleString('default', { month: 'long' })
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
let year = now.getFullYear();
//weekday name
let weekday = now.toLocaleString("default", { weekday: "long" })
// full date: day, month day of month, year
let date = `${weekday}, ${monthName} ${dayOfMonth}, ${year}`;
// Conditions for long message 
if (
  dayOfWeek == 1 ||
  dayOfWeek == 2
) {
  message = date  + ". Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
  message = date;
}
// Display message in h3 where id = date
document.getElementById('date').innerHTML = message;


// Read More
function readMore() {
  let text = document.getElementById("read");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
//read less
function change() 
{
    let less = document.getElementById("readMore");
    if (less.value=="read more...") less.value = "read more...";
    else less.value = "read less...";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Weather app

// Wind Chill
// fetch data
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604045&appid=cca4336ed1a11c87c882d80f866b168d";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
        const currentTemp = document.getElementById('temp');
        const currentSpeed = document.getElementById('windSpeed');
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const name = document.querySelector('figcaption')

        currentSpeed.textContent = jsObject.wind.speed * 0.62.toFixed(0);
        currentTemp.textContent = jsObject.main.temp;
        var aCurrentTemp = 1.8*(currentTemp-273) + 32;
        var actualCurrentTemp = aCurrentTemp.toFixed(0);
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');


        document.getElementById('weathericon').setAttribute('src', iconsrc);
        document.getElementById('weathericon').setAttribute('alt', desc);
        document.getElementById('figcaption').textContent = desc;
        name.innerHTML = `<h3>Currently: ${desc}</h3>`;

        var tempF = actualCurrentTemp.textContent;
        var speed = currentSpeed.textContent;
        var display = windChill(tempF, speed);

        let windchill = "";
        if (tempF <= 50 || speed > 3) {
            windchill = windChill(tempF, speed);
            windchill = `${windchill}°F`;
        } else {
            windchill = "N/A";
        }

        document.getElementById('chill').innerHTML = display;
    });


function windChill(tempF, speed) {
    var T = tempF;
    var S = speed;
    var F = 35.74 + 0.6215 * T - 35.75 * Math.pow(S, 0.16) + 0.4275 * T * Math.pow(S, 0.16);
    return F.toFixed(0);

}
