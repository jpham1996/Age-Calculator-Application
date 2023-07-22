const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const yearInput = document.querySelector("#year");
const form = document.querySelector("#age-form");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
