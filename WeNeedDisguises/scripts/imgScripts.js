// mobile navigation 
function mobileNav() {
    let x = document.getElementById("navigation");
    if (x.className === "mobileNavigation") {
      x.className += " responsive";
    } else {
      x.className = "mobileNavigation";
    }
  }

  // image gallery 
  const requestURL = "../imageGallery.json";

const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const imageGallery = jsonObject['images'];
    imageGallery.forEach(displayGallery);
  });

function displayGallery(image) {
  // create card elements
  let card = document.createElement('section');
  let picture = document.createElement('picture');
  let img = document.createElement('img');


  // Image 
  img.setAttribute('src', image.placeholderimageurl);
  img.setAttribute('data-src', image.imageurl);
  img.setAttribute('alt', image.alt);
  img.setAttribute('class', image.class);


  // Add/append
  picture.appendChild(img);
  card.appendChild(picture);
  img.className = "lazy";

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}


// Lazy Loading
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px 50px 0px"
};

const loadImages =(image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) =>{
          if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
          }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}