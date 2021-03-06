// mobile navigation 
function mobileNav() {
  let x = document.getElementById("navigation");
  if (x.className === "mobileNavigation") {
    x.className += " responsive";
  } else {
    x.className = "mobileNavigation";
  }
}

// slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// Lazy Loading
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px 60px 0px"
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

// Random quote
const quotes = [{
  "quote": "“ANYONE CAN COSPLAY. NO MATTER WHAT AGE, GENDER, SKIN COLOR OR BODY SHAPE. IT’S THE ULTIMATE ARTISTIC EXPRESSION!”",
  "source": "-Kamui Cosplay"
},
{
  "quote": "“ just think to remember people from time to time, that we all started small! Cosplay is really not about being skilled and have plenty of resources, but about having fun and just enjoy what you do. ”",
  "source": "-Kamui Cosplay"
}, 
{
  "quote": "“Suffering is fun.”",
  "source": "-Kamui Cosplay"
}, 
{
  "quote": "“Whenever someone creates something with all of their heart, then that creation is given a soul.”",
  "source": "–The Baron, ‘The Cat Returns’ Studio Ghibli (2002)."
}, 
{
  "quote": "“Bring back that love for characters and shows that makes you want to cosplay them with your friends for years!  You put a lot of work into that outfit: show it off for more than one con!Nobody likes fast fashion cosplay trends, so keep wearing what you love!”",
  "source": "-Cowbutt Crunchies Cosplay"
}, 
{
  "quote": "“You do NOT need to be a professional to make amazing cosplays!! Never assume hobbyists aren't up to par, or only pros win contests or you can't improve unless cosplay becomes your job.All of this stuff is what we make in our free time after work!.”",
  "source": "-Cowbutt Crunchies Cosplay"
}, 
{
  "quote": "“I love embossing leather so much. It just puts me at ease and makes me forget all my worries and stress. Even if the process is literally just: Step 1: Spray water, Step 2: SMACK, Step 3: REPEAT TIL CRY!!!”",
  "source": "-A.K. Wirru. "
}, 
{
  "quote": "“Cosplay is a weird art/discipline/hobby where there's a general expectation that every attempt needs to become a finished product - when most other art forms are the exact opposite.The more you repeat a proccess the less often the mistakes will happen over time and it's those failures on less important project, less important copies of the garment etc that becomes reliable skill.”",
  "source": "-A.K. Wirru."
},
{
  "quote": "“If you build a good relationship with failure, then failing can be quite fun. I can tell you now I have the most fun when I screw up a costume piece and have to figure out what to do to not to make not screw up anymore. And I think when you learn to enjoy failure you can enjoy success so much more.”",
  "source": "-A.K. Wirru."
},
{
  "quote": "“Perfectionism is such a beautiful strength for a cosplayer. Because the fact your a perfectionist means that your passionate. the fact that you can find the tiniest mistake in your current work, it means that you have the talent to spot the next step in your journey to improvement. That is something that cant be taught.”",
  "source": "-A.K. Wirru."
}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}.`;
  source.innerText = random.source;
}

randomQuote();

document.getElementById("quoteButton").addEventListener('click', randomQuote)