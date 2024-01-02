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
