const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const accordionButtons = document.querySelectorAll(".accordion-button");
const hiddenDivs = document.querySelectorAll("#hiddenDiv");
const accorDions = document.querySelectorAll(".accordion");
let openIndex = -1; // Initially, no accordion is open

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener("click", () => {
    if (i === openIndex) {
      // If the clicked accordion is already open, close it
      hiddenDivs[i].classList.remove("show");
      accordionButtons[i].classList.remove("open");
      accorDions[i].classList.remove("active");
      openIndex = -1; // No accordion is open
    } else {
      // Close the previously opened accordion (if any)
      if (openIndex !== -1) {
        hiddenDivs[openIndex].classList.remove("show");
        accordionButtons[openIndex].classList.remove("open");
        accorDions[openIndex].classList.remove("active");
      }

      // Open the clicked accordion
      hiddenDivs[i].classList.add("show");
      accordionButtons[i].classList.add("open");
      accorDions[i].classList.add("active");
      openIndex = i;
    }
  });
}

//for hero twinkle stars section
const starrySky = document.querySelector(".hero-section");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Vary animation duration
  star.style.backgroundColor = getRandomColor(); // Assign a random color
  starrySky.appendChild(star);
}

function getRandomColor() {
  const colors = [
    "#ffffff",
    "#ffffcc",
    "#ffff99",
    "#ffff66",
    "#ffff33",
    "#ffff00",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Generate stars
for (let i = 0; i < 100; i++) {
  createStar();
}

//for our-approach section
const dotButtons = document.querySelectorAll(".dot-button");
const divs = document.querySelectorAll(".content > div");
const selectedDot = document.querySelector(".selected-dot");
let currentIndex = 1; // Start with the middle dot as the default selected

dotButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    const dotIndex = Array.from(dotButtons).indexOf(button);
    const currentX = selectedDot.style.transform
      ? parseFloat(selectedDot.style.transform.match(/[-]?\d+/)[0])
      : 0;

    if (dotIndex > currentIndex) {
      // Move right
      selectedDot.style.transition = "transform 0.3s";
      selectedDot.style.transform = `translateX(${(dotIndex - 1) * 40}px)`;
    } else if (dotIndex < currentIndex) {
      // Move left
      selectedDot.style.transition = "transform 0.3s";
      selectedDot.style.transform = `translateX(${(dotIndex + 1) * 40}px)`;
    }

    divs.forEach((div) => {
      div.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
    currentIndex = dotIndex; // Update the current selected dot index
  });
});
