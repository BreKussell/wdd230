// mobile navigation 
function mobileNav() {
  var x = document.getElementById("navigation");
  if (x.className === "mobileNavigation") {
    x.className += " responsive";
  } else {
    x.className = "mobileNavigation";
  }
}



//Date.now
//let difference = currDate - prevDate
//console.log(difference);
//let daysDifference = Math.floor(difference/1000/60/60/24);

// local storage 
function displayCounter() {
  // check if the localStorage object is supported by the browser
  if ('localStorage' in window && window['localStorage'] !== null) {
      // if the counter has been defined, increment its value, // otherwise, set it to 0
      ('counter' in localStorage && localStorage['counter'] !== null) ? localStorage['counter']++ : localStorage['counter'] = 0;
      var container = document.getElementById('container');
      if (!container) { return };
      // display the counter on screen
      container.innerHTML = 'Hey, you visited this page ' + localStorage['counter'] + ' times.';
  }
}
// call the 'displayCounter()' function when the web page is loaded
window.onload = function () {
  displayCounter();
}





// lazy loading 
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
}); 
