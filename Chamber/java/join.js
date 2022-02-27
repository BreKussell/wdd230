// mobile navigation 
function mobileNav() {
    var x = document.getElementById("navigation");
    if (x.className === "mobileNavigation") {
      x.className += " responsive";
    } else {
      x.className = "mobileNavigation";
    }
  }


  // Read More
function next() {
    let text = document.getElementById("nextButton");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function moreInfo() {
    let text = document.getElementById("memInfo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

