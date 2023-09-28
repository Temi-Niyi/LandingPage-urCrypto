const menuBtn = document.querySelector(".menuBtn");
const menu = document.getElementById("menu");
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const buttonsContainer = document.getElementById("buttonsContainer");

let menuVisible = false;

menuBtn.addEventListener("click", function () {
  if (menuVisible) {
    menu.style.display = "none";
    menuBtn.textContent = "☰"; // Change text to "☰"
  } else {
    menu.style.display = "block";
    menuBtn.textContent = "x"; // Change text to "x"
  }
  menuVisible = !menuVisible;
});

// Add event listener to window resize to handle changes in screen width
window.addEventListener("resize", function () {
  if (window.innerWidth <= 781) {
    // Hide login and register buttons
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    
    // Show the menuBtn
    menuBtn.style.display = "block";
  } else {
    // Restore initial state when screen width is larger than 600px
    menuBtn.style.display = "none";
    menu.style.display = "block";
    menuVisible = false;
    loginButton.style.display = "inline-block";
    registerButton.style.display = "inline-block";
  }
});



// Initial check on page load
if (window.innerWidth <= 781) {
  menuBtn.style.display = "block";
}else{
  menuBtn.style.display = "none";

}

