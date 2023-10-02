const menuBtn = document.querySelector(".menuBtn");
const menu = document.getElementById("menu");
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const buttonsContainer = document.getElementById("buttonsContainer");

let menuVisible = false;

function adjustDisplay() {
  if (window.innerWidth >= 768) {
    menuBtn.style.display = "none";
    loginButton.style.display = "inline-block";
    registerButton.style.display = "inline-block";
  } else {
    menuBtn.style.display = "block";
    loginButton.style.display = "none";
    registerButton.style.display = "none";
  }
}

menuBtn.addEventListener("click", function () {
  if (menuVisible) {
    menu.style.display = "none";
    menuBtn.textContent = "☰";
  } else {
    menu.style.display = "block";
    menuBtn.textContent = "x";
  }
  menuVisible = !menuVisible;
});

// Call the adjustDisplay function on page load
adjustDisplay();

// Add event listener to window resize to handle changes in screen width
window.addEventListener("resize", adjustDisplay);
