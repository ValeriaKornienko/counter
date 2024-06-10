const COUNTER = document.querySelector(".COUNTER");
const MINUS = document.querySelector("#MINUS-button");
const PLUS = document.querySelector("#PLUS-button");

let count = 0;

const changeCount = () => {
  COUNTER.textContent = count;
};

const onMinus = () => {
  if (count > -100) {
    count -= 10;
    changeCount();
  }
};

const onPlus = () => {
  if (count < 100) {
    count += 10;
    changeCount();
  }
};

MINUS.addEventListener("click", onMinus);
PLUS.addEventListener("click", onPlus);
