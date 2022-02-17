/** @format */
let numberArray = [];

function clear() {
  numberArray = [];
  const screen = document.querySelector("#screen");
  screen.textContent = "";
}

function numberInput(number) {
  numberArray.push(number);
  // alert(`the numberArray is: ${numberArray}`);
  display(numberArray);
}

function display(screenOutput) {
  const screen = document.querySelector("#screen");
  screen.textContent = screenOutput;
}
function events() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-", "x", "/"];
  const remove = ["clear", "delete"];
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.some((number) => number === button.id)) {
        // alert("two many puppies!");
        numberInput(button.id);
      } else if (operators.some((operator) => operator === button.id)) {
        // alert("you're a smooth operator");
        numberInput(button.id);
      } else if (button.id === "clear") {
        clear();
        // alert("it's garbage can, not garbage cannot!");
      } else if (button.id === "=") {
        // alert("we are all equal");
      } else if (button.id === ".") {
        // alert("i'm a rebel dotty");
      }
    });
  });
}

events();
