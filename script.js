"use strict";

const numOne = document.getElementById("numone");
const numTwo = document.getElementById("numtwo");
const answer = document.getElementById("answer");

document.querySelector("#btn").addEventListener("click", function () {
  const finalAns = Number(numOne.value) * Number(numTwo.value);
  answer.value = finalAns;
});

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");

  hamMenuIcon.classList.toggle("fa-times");
});
