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
    // Convert Kelvins to Fahrenheit 
    const Ktemp  = jsObject.main.temp;
    const Ftemp =  1.8*(Ktemp-273) + 32;
    const temp = document.getElementById('temp').textContent = Ftemp.toFixed(0);
    // Fetch data and display in appropriate places
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windSpeed = jsObject.wind.speed;
    const humid = jsObject.main.humidity;
    document.getElementById('weathericon').setAttribute('src', iconsrc);
    document.getElementById('weathericon').setAttribute('alt', desc);
    document.getElementById('weatherDescription').textContent = desc;
    document.getElementById('speed').textContent = windSpeed.toFixed(0);
    document.getElementById('humid').textContent = humid;
    // Wind chill is empty will fill with result from function
    let windChill = "";
      // set conditions for when wind chill is measured
      if (temp <= 50 && windSpeed > 3) {
            windChill = windchill(temp, windSpeed);
            windChill = `${windChill}&deg;F`;
        } else {
            windChill = "N/A";
        }

        document.getElementById("chill").innerHTML = windChill;
        // calculate wind chill
        function windchill(temp, windSpeed){
            windchill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
            return  windchill.toFixed(0);
        }
  });
