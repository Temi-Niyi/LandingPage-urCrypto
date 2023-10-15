const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "flex";
  menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

menu.style.display = "none";
closeBtn.style.display = "none";
