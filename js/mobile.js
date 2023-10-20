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
    if (openIndex !== -1) {
      // Close the previously opened accordion
      hiddenDivs[openIndex].classList.remove("show");
      accordionButtons[openIndex].classList.remove("open");
      accorDions[openIndex].classList.remove("active");
    }

    // Open the clicked accordion
    hiddenDivs[i].classList.toggle("show");
    accordionButtons[i].classList.toggle("open");
    accorDions[i].classList.add("active"); // Add the "active" class
    openIndex = i;
  });
}
