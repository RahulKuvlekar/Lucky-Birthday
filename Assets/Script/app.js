const cl = console.log;

const outputSection = document.getElementById("output-section");

const checkBtn = document.getElementById("checkBtn");
const errorMsg = document.getElementById("errorMsg");

const makeVisible = (element) => {
  element.classList.remove("notVisible");
};

const notVisible = (element) => {
  element.classList.add("notVisible");
};

const sumOfDigit = (number) => {
  var value = number;
  sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
};

const isLuckyBday = (no, yr, mn, dt) => {
  const date = parseInt(yr + mn + dt);
  const sum = sumOfDigit(date);
  const number = +no;
  cl("date ", date, " sum ", sum, typeof sum);
  if (sum % number === 0) {
    outputSection.querySelector("img").src =
      "https://media.giphy.com/media/jJQC2puVZpTMO4vUs0/giphy.gif";
    return "ANSWER Its LUCKY NO";
  } else {
    outputSection.querySelector("img").src =
      "https://media.giphy.com/media/MarYoZ2BIJUimKydXa/giphy.gif";
    return "BETTER luck Next Time";
  }
};

checkBtn.addEventListener("click", () => {
  const inputDate = document.getElementById("input-date").value;
  const inputNumber = document.getElementById("input-number").value;

  if (inputDate === "") {
    errorMsg.textContent = " Please Check DATE inputs ";
    makeVisible(errorMsg);
    return;
  } else if (+inputNumber === "" || +inputNumber < 1) {
    errorMsg.textContent = " Please Check NUMBER inputs ";
    makeVisible(errorMsg);
    return;
  }

  const ans = isLuckyBday(inputNumber, ...inputDate.split("-"));

  outputSection.querySelector("h2").textContent = ans;
  makeVisible(outputSection);
});
