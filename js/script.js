console.log("Hello World");

const problem = document.querySelector(".problemBtn");

problem.addEventListener("click", function () {
  const problem = document.querySelector("#problem");
  problem.classList.toggle("none");
});

const soltuion = document.querySelector(".solutionBtn");

soltuion.addEventListener("click", function () {
  const problem = document.querySelector("#solved");
  problem.classList.toggle("none");
});

// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("none");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.remove("none");
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
