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
const weatherAppInfo = "https://api.openweathermap.org/data/2.5/weather?id=5604045&appid=cca4336ed1a11c87c882d80f866b168d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
   const desc = jsObject.weather[0].description;
  // Kelvins 
  let K = jsObject.main.temp;
  // K to F
  let temp = 1.8*(K-273) + 32;
  // wind
  kph = jsObject.wind.speed;
  let wind = kph*0.62;
  // call windChill function
  let calcWindChill = windChill(temp, wind);
  // display output in h3
  if (
    wind <= 3 ||
    temp >= 50
  ) {
    message = iconsrc + "<br />" + "Conditions: " + desc + "<br />" +  "Wind Chill:  N/A";
  } else {
    message = iconsrc + "<br />" + "Conditions: " + desc + "<br />" +  "Wind Chill " + calcWindChill.toFixed(0) + "(°F)";
  }
  // Display message in h3
  document.getElementById('windChill').innerHTML = message;
  

function windChill(temp, wind) {
  // declare variables set them to values found in text box
  let t = temp;
  let w = wind;
  // math
  let chill =
    35.75 +
    0.6215 * t -
    35.75 * Math.pow(w, 0.16) +
    0.4275 * t * Math.pow(w, 0.16);
}
  return chill;
});