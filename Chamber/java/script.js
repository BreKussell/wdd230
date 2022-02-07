// mobile navigation 
function mobileNav() {
    const x = document.getElementById("nav");
if (x.className == "top") {
x.className += " responsive";
} else {
x.className = "top";
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
  message = date + "<br />" + " Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
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

// Weather app

// Wind Chill
  // temporary stand in for temperature
  let temp = 45;
  // temporary stand in for wind speed
  let wind = 3.0;
  // call windChill function
  let calcWindChill = windChill(temp, wind);
  // display output in h3
  document.getElementById("windChill").innerText =
    "Wind Chill " + calcWindChill.toFixed(0) + "(°F)";

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
  return chill;
}