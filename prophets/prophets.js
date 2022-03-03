const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

  });



  function displayProphets(prophet) {  
      // Create elements to add to the document
    let card = document.createElement('section');
     // Change the textContent property of the h2 element to contain the prophet's full name
    let h2 = document.createElement('h2');   
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Add/append the existing HTML div with the cards class with the section(card)
    let dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = prophet.birthdate;
    card.appendChild(dateOfBirth);

    let placeOfBirth = document.createElement('p');
    placeOfBirth.textContent = prophet.birthplace;
    card.appendChild(placeOfBirth);


    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', prophet.name + " " + prophet.lastname + " " + prophet.order);
    card.appendChild(image);
    
    
    document.querySelector('div.cards').appendChild(card);

   



  }


  // to clear cards
  //let card  = document.querySelectorAll('.cards')
  //cards.forEach((item) => {
    //  item.remove();
 // })

 
 
 // changing styles in js
//let change = document.querySelector('.cards');
//change.setAttribute('style', 'background-color: violet; border: double 5px black;')


//window.addEventListener('resize', function_name);
//window.addEventListener('load', function_name);

