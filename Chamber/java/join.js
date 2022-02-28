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

// Submit Redirect
  document.getElementsByClassName("submit").onclick = function () {
    location.href = "TY.html";
};


// Character limitaion 
function limit(element)
{
    const element = getElementById(title);
    var max_chars = 7;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }

}
