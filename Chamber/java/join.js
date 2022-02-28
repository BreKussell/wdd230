// mobile navigation 
function mobileNav() {
    var x = document.getElementById("navigation");
    if (x.className === "mobileNavigation") {
      x.className += " responsive";
    } else {
      x.className = "mobileNavigation";
    }
  }


//tel Only allow Numbers
function onlyNumbers(evt) {
          
  const ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}

// restricted Character


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

// Submit Redirect
  document.getElementsByClassName("submit").onclick = function () {
    location.href = "TY.html";
};





