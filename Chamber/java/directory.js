const requestURL = "https://brekussell.github.io/wdd230/data.json";

const cards = document.querySelector('div.cards-2');
const listButton = document.querySelector("#list-button");
const gridButton = document.querySelector("#grid-button");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

function displayCompanies(company) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = company.image;
  image.setAttribute('alt', company.name);
  card.appendChild(image);

  //h2 name
  let h3 = document.createElement('h3');
  h3.textContent = company.name;
  card.appendChild(h3);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = company.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = `Phone: ${(company.phone ==null) ? 'Not Available': company.phone}`;
  card.appendChild(p2);

  //p website
  let a = document.createElement('a');
  a.setAttribute("href", company.website);
  a.setAttribute('target', '_blank');
  a.textContent = company.website;
  card.appendChild(a);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("grid-view", "list-view")
});

gridButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "grid-view")
});