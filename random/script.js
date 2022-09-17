let generateBtn = document.getElementById("generate");

function randomNum() {
  let numberString = [];
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let count = document.getElementById("count");
  let minValue = Number(min.value);
  let maxValue = Number(max.value);
  let countValue = Number(count.value);
  if (minValue > maxValue) {
    minValue = maxValue + minValue;
    maxValue = minValue - maxValue;
    minValue = minValue - maxValue;
    min.value = minValue;
    max.value = maxValue;
  }
  for (let i = 0; i < countValue; i++) {
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    while (numberString.includes(num)) {
      num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    numberString.push(num);
  }
  numberString.sort((a, b) => a - b);
  document.getElementById("result").innerText = numberString.join(" ");
}
window.addEventListener("load", randomNum());
generateBtn.addEventListener("click", randomNum);
