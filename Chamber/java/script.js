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



// Weather app
