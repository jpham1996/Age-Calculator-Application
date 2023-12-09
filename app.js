const form = document.querySelector("#age__form");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const yearInput = document.querySelector("#year");
let ageResult = document.querySelector(".age__result");

const today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// January, Feburary, March, April, May, June
// July, August, September, October, November,   December

function errorValidations() {
  if (isNaN(monthInput.value)) {
    document.querySelector(".errorMessageMonth").innerText =
      "Please enter a number";
  } else if (
    monthInput.value === "" ||
    !(monthInput.value >= 1 && monthInput.value <= 12)
  ) {
    document.querySelector(".errorMessageMonth").innerText =
      "Please enter a month value between 1 and 12";
  } else {
    document.querySelector(".errorMessageMonth").innerText = "";
  }

  if (isNaN(dayInput.value)) {
    document.querySelector(".errorMessageDay").innerText =
      "Please enter a number";
  } else if (
    dayInput.value === "" ||
    !(dayInput.value >= 1 && dayInput.value <= 31)
  ) {
    document.querySelector(".errorMessageDay").innerText =
      "Please enter a day value between 1 and 31";
  } else {
    document.querySelector(".errorMessageDay").innerText = "";
  }

  if (isNaN(yearInput.value)) {
    document.querySelector(".errorMessageYear").innerText =
      "Please enter a number";
  } else if (
    yearInput.value === "" ||
    !(yearInput.value >= 1000 && yearInput.value <= currentYear)
  ) {
    document.querySelector(".errorMessageYear").innerText =
      "Please enter a year value between 1000 and 2023";
  } else {
    document.querySelector(".errorMessageYear").innerText = "";
  }
}

function calculateAge() {
  // if (dayInput.value > currentDay) {
  //   currentDay += daysPerMonth[currentMonth - 1];
  //   currentMonth -= 1;
  // }

  // if (monthInput.value > currentMonth) {
  //   currentMonth += 12;
  //   currentYear -= 1;
  // }

  const ageDay = currentDay - dayInput.value;
  const ageMonth = currentMonth - monthInput.value;
  const ageYear = currentYear - yearInput.value;

  if (isNaN(ageYear) || isNaN(ageMonth) || isNaN(ageDay)) {
    ageResult.innerText = "";
  } else {
    ageResult.innerText = `You Age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorValidations();
  calculateAge();
});

// Leap Year
// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
