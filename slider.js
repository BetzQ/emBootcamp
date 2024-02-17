const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let counter = 0;
const cardWidth = document.querySelector(".flex-none").clientWidth;

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  slider.style.transform = `translateX(-${counter * cardWidth}px)`;
});

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter > 5) {
    counter = 5;
  }
  slider.style.transform = `translateX(-${counter * cardWidth}px)`;
});
