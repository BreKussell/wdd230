// mobile navigation 
function mobileNav() {
    const x = document.getElementById("nav");
if (x.className == "top") {
x.className += " responsive";
} else {
x.className = "top";
}
}



// date function at top of 
function message() {
// Get the input from computer's clock.
const now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
let year = now.getFullYear();
let date = dayOfWeek + dayOfMonth + year;
// Conditions for sleeping in. 
if (
  dayOfWeek == 1 ||
  dayOfWeek == 2
) {
  message = date + <br /> + " Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
  message = date;
}
// Display message in h3 where id = date
document.getElementById('date').innerHTML = message;
}