// mobile navigation 
function mobileNav() {
  let x = document.getElementById("navigation");
  if (x.className === "mobileNavigation") {
    x.className += " responsive";
  } else {
    x.className = "mobileNavigation";
  }
}


const requestURL = "https://brekussell.github.io/wdd230/data.json";

const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  // create card elements
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let img = document.createElement('img');
  let address = document.createElement('h3');
  let phone = document.createElement('h3');
  let website = document.createElement('a');

  // TextContent property of the name element to contain the company's name
  name.innerHTML = `${company.name}`;
  address.textContent = `${company.address}`;
  phone.textContent = `${company.phone}`;
  website.textContent = `${company.website}`;

  // Image 
  img.setAttribute('src', company.imageurl);
  img.setAttribute('alt', `${company.name}´s image`);
  img.setAttribute('loading', 'lazy');

  // Add/append
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}


// button functions
const cardView = document.getElementById('cardsView');
const listView = document.getElementById('listView');

cardView.addEventListener('click', () => {cards.classList.add('cards')}, once="true");
cardView.addEventListener('click', () => {cards.classList.remove('showList')}, once="true");

listView.addEventListener('click', () => {cards.classList.add('showList')}, once="true");
listView.addEventListener('click', () => {cards.classList.remove('cards')}, once="true");

if (($(window).width() < 1000) && ($(window).width() > 600)) {
  listView.addEventListener('resize',() => {cards.classList.add('showList')});
  listView.addEventListener('onload',() => {cards.classList.add('showList')});

  listView.addEventListener('resize',() => {cards.classList.add('showList')});
  listView.addEventListener('onload',() => {cards.classList.add('showList')});
  
} else {
  Window.addEventListener('onload',() => {cards.classList.add('cards')});
}
