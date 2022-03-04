const businessData = require('data.json');

fetch(businessData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);

  });

  function displayBusiness(businesses) {  
  let businessCard = document.createElement('section');
  let h2 = document.createElement('h2');   
  h2.textContent = businesses.name;
  businessCard.appendChild(h2);
  
  let address = document.createElement('p');
  address.textContent = businesses.address;
  businessCard.appendChild(address);

  let phoneNum = document.createElement('p');
  phoneNum.textContent = businesses.phone;
  card.appendChild(phoneNum);

  let web = document.createElement('p');
  web.textContent = businesses.website;
  businessCard.appendChild(web);


  let image = document.createElement('img');
  image.setAttribute('src', business.imageurl);
  image.setAttribute('alt', businesses.name);
  businessCard.appendChild(image);
  
  
  document.querySelector('div.businessCard"').appendChild(businessCard);

 



}