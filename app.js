const form = document.querySelector("#age__form");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const yearInput = document.querySelector("#year");
const ageResult = document.querySelector(".age__result");
const error = document.querySelector(".error");
const errorMessage = new Array();

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const numberRegex = /^[0-9]*$/;
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// January, Feburary, March, April, May, June
// July, August, September, October, November, December

function errorValidations() {
  let messageHTML = "";

  if (!monthInput.value.match(numberRegex)) {
    errorMessage.push("test1");
  } else if (
    monthInput.value === "" ||
    !(monthInput.value >= 1 && monthInput.value <= 12)
  ) {
    errorMessage.push("Please enter a month value between 1 and 12");
  }

  if (!dayInput.value.match(numberRegex)) {
    errorMessage.push("test2");
  } else if (
    dayInput.value === "" ||
    !(dayInput.value >= 1 && dayInput.value <= 31)
  ) {
    errorMessage.push("Please enter a day value between 1 and 31");
  }

  if (!yearInput.value.match(numberRegex)) {
    errorMessage.push("test3");
  } else if (
    yearInput.value === "" ||
    !(yearInput.value >= 1000 && yearInput.value <= currentYear)
  ) {
    errorMessage.push("Please enter a year value between 1000 and 2023");
  }

  errorMessage.forEach(function (message) {
    messageHTML += "<li>" + message + "</li>";
  });

  error.innerHTML = messageHTML;
}

function calculateAge() {
  if (dayInput.value > currentDay) {
    currentDay += daysPerMonth[currentMonth - 1];
    currentMonth -= 1;
  }

  if (monthInput.value > currentMonth) {
    currentMonth += 12;
    currentYear -= 1;
  }

  const ageYear = currentYear - yearInput.value;
  const ageMonth = currentMonth - monthInput.value;
  const ageDay = currentDay - dayInput.value;

  ageResult.innerText = `You Age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorValidations();
  calculateAge();
});
