"use strict";

const numOne = document.getElementById("numone");
const numTwo = document.getElementById("numtwo");
const answer = document.getElementById("answer");

document.querySelector("#btn").addEventListener("click", function () {
  const finalAns = Number(numOne.value) / Number(numTwo.value);
  answer.value = finalAns;
});
