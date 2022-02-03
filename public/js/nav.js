const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const darkmodeToggle = document.querySelector('.DarkmodeIcon')
hamburger.addEventListener("click", () => {
  darkmodeToggle.classList.toggle("open");
  links.forEach(link => {
        link.classList.toggle("fade");
    });
  //Animate Links
  navLinks.classList.toggle("open");
  //Hamburger Animation
  hamburger.classList.toggle("toggle");

});



var togButton = document.getElementById("togButton");

//Check localStorage
//It's commented out because it doesn't work in Stack Overflow snippet
darkOn = localStorage.getItem("dark") == "true" ? true : false;
setTheme();

function setTheme(){
  //Save to localStorage
  //It's commented out because it doesn't work in Stack Overflow snippet
  localStorage.setItem("dark", darkOn ? "true" : "false");
  if(darkOn){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
}

var darkOn = false;
function toggle(){
  darkOn = !darkOn;
  setTheme();
}

togButton.addEventListener("click", toggle);