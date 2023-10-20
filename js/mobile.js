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
