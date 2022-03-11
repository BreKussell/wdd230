const businessData = "https://brekussell.github.io/wdd230/data.json";

fetch(businessData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);

  });

  const cards = document.querySelector('div.card');
const listButton = document.querySelector(".listSymbol");
const gridButton = document.querySelector(".gridSymbol");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        // console.table(jsonObject);
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
  let card = document.createElement('section');

  //image
  let image = document.createElement('img');
  image.src = business.imageurl;
  image.setAttribute('alt', business.name);
  card.appendChild(image);

  //Business name as h
  let h = document.createElement('h');
  h.textContent = business.name;
  card.appendChild(h);

  //Business address as p
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  card.appendChild(p1);

  //Business Phone number as p 
  let p2 = document.createElement('p');
  p2.textContent = business.phone;
  card.appendChild(p2);

  //Business website as <a><a/>
  let a = document.createElement('a');
  a.textContent = business.website;
  card.appendChild(a);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("grid-view", "list-view")
});

gridButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "grid-view")
});