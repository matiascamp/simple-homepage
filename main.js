const sun = document.getElementsByClassName("sun");
const moon = document.getElementsByClassName("moon");
const logo = document.getElementById("logo");

const toggleDesktop = document.getElementById("dark-mode-toggle");
const toggleMobile = document.getElementById("dark-mode-toggle-mobile");


const toggleDarkMode = (toggleElement) => {
  const isChecked = toggleElement.checked
  
  document.body.classList.toggle("dark-mode", isChecked);

  for (let i = 0; i < moon.length; i++) {
    moon[i].style.filter = isChecked ? "brightness(1) invert(0)" : "brightness(0) invert(1)"
  }
  for (let i = 0; i < sun.length; i++) {
    sun[i].style.filter = isChecked ? "brightness(0) invert(1)"  :"brightness(1) invert(0)"
  }

  
  logo.src = isChecked
    ? "./assets/alarado-icon-homepage-dark.svg"
    : "./assets/alarado-icon-homepage.svg";
}


toggleDesktop.addEventListener("change", () => toggleDarkMode(toggleDesktop));
toggleMobile.addEventListener("change", () => toggleDarkMode(toggleMobile));

const mediaQuery = window.matchMedia("(max-width: 640px)");

function handleScreenChange(e) {
  if (e.matches) {
    const aside = document.querySelector("aside");
    const openButton = document.getElementById("menu-toggle");
    const closeButton = document.getElementById("accordion-toggle");

    openButton.addEventListener("change", () => {
      if (openButton.checked) {
        aside.classList.add("open");
        closeButton.checked = false
      }
    });


    if (closeButton) {
      closeButton.addEventListener("change", () => {
        if (closeButton.checked) {
          aside.classList.remove("open");
          openButton.checked = false
        }
      });
    }

  }
}

mediaQuery.addEventListener("change", handleScreenChange);

handleScreenChange(mediaQuery);
