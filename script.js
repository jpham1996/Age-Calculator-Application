// DOM Selectors
const form = document.querySelector("#age__form");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const yearInput = document.querySelector("#year");
const ageResultText = document.querySelector(".age__result");
const errorMessageMonthText = document.querySelector(".errorMessageMonth");
const errorMessageDayText = document.querySelector(".errorMessageDay");
const errorMessageYearText = document.querySelector(".errorMessageYear");

// Get Current Date (today)
const today = new Date();
let currentMonth = today.getMonth() + 1;
let currentDay = today.getDate();
// Value of January is 0 + 1
let currentYear = today.getFullYear();

// Check if Validation is true or false, initial value is true
let isValid = true;

// User can only input number keys, backspace, and tab only.
function getNumberInputsOnly(e) {
  if (isNaN(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
    e.preventDefault();
  }
}

// January, Feburary, March, April, May, June, July, August, September, October, November, December
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Check if year is a leap year
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// Check days, months, and years input validation
function checkValidations() {
  let febDaysLimit = daysPerMonth[monthInput.value - 1];
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);
  isValid = true;

  if (isLeapYear(year) && month === 2) {
    febDaysLimit = 29;
  }
  if (day > febDaysLimit || day === 0 || day > 31 || dayInput.value === "") {
    errorMessageDayText.innerText = "Please enter a valid day";
    isValid = false;
  } else {
    errorMessageDayText.innerText = "";
    isValid = true;
  }

  if (month > 12 || month === 0 || monthInput.value === "") {
    errorMessageMonthText.innerText = "Please enter a month between 1 and 12";
    isValid = false;
  } else {
    errorMessageMonthText.innerText = "";
    isValid = true;
  }

  if (year > currentYear || yearInput.value === "") {
    errorMessageYearText.innerText = `Please enter a year between 0 and ${currentYear}`;
    isValid = false;
  } else {
    errorMessageYearText.innerText = "";
    isValid = true;
  }
}

// Check if the days, months, and years input validations are true before doing age calculation, if not then no age calculation is made
function getAgeResult() {
  if (isValid === false) {
    ageResultText.innerText = "";
  } else {
    calculateAge();
  }
}

// Calculates age based on days, months, and years input and if input validations are true
function calculateAge() {
  if (Number(dayInput.value) > currentDay) {
    currentDay = currentDay + daysPerMonth[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (Number(monthInput.value) > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  const ageYear = currentYear - Number(yearInput.value);
  const ageMonth = currentMonth - Number(monthInput.value);
  const ageDay = currentDay - Number(dayInput.value);

  ageResultText.innerText = `Your Age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;
}

function getAgeCalculation(e) {
  e.preventDefault();
  checkValidations();
  getAgeResult();
}

// Event Listeners
form.addEventListener("submit", getAgeCalculation);
monthInput.addEventListener("keydown", getNumberInputsOnly);
dayInput.addEventListener("keydown", getNumberInputsOnly);
yearInput.addEventListener("keydown", getNumberInputsOnly);
