const countDown = document.querySelector(".countdown");
const resetValue = document.querySelector(".reset-value");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const stopBtn = document.querySelector(".stop-btn");
const timeBtn = document.querySelector(".time-btn");
const clearBtn = document.querySelector(".clear-btn");

let value = 0;
let timerId;

const start = () => {
  timerId = setInterval(() => {
    countDown.innerText = value++;
  }, 1000);
};

const reset = () => {
  clearInterval(timerId);
  value = 0;
  countDown.innerText = value;
};

const stop = () => {
  time();
  clearInterval(timerId);
};

const time = () => {
  let para = document.createElement("p");
  para.innerText = `The stop time is: ${countDown.innerText}`;
  resetValue.append(para);
};

const clear = () => {
  resetValue.innerHTML = "";
};

startBtn.addEventListener("click", start);

resetBtn.addEventListener("click", reset);

stopBtn.addEventListener("click", stop);

timeBtn.addEventListener("click", time);

clearBtn.addEventListener("click", clear);
