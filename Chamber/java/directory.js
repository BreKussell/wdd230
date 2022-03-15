const requestURL = "https://brekussell.github.io/wdd230/data.json";

const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  // Create elements to add to the document
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

  // Image attributes
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



const cardView = document.querySelector('#cardsView');
const listView = document.querySelector('#listView');

cardView.addEventListener('click', () => {cards.classList.add('cards')}, once="true");
cardView.addEventListener('click', () => {cards.classList.remove('showList')}, once="true");

listView.addEventListener('click', () => {cards.classList.add('showList')}, once="true");
listView.addEventListener('click', () => {cards.classList.remove('cards')}, once="true");