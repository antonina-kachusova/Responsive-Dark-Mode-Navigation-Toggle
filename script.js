const bodyElement = document.body;
const switcher = document.getElementById("switcher");

function toggleDarkMode() {
  bodyElement.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    switcher.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    switcher.checked = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    bodyElement.classList.add("dark-mode");
    switcher.checked = true;
  }
});

switcher.addEventListener("change", toggleDarkMode);

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});