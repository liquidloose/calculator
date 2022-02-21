/* eslint-disable no-restricted-syntax */
/** @format */
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "x", "/"];
let screenObject = {
  array1: [],
  operator: [],
  array2: [],
  output: function (sum) {
    const screen = document.querySelector("#screen");
    screen.textContent = sum;
    console.log(screenObject);
  },
};

function add(arrayOne, arrayTwo) {
  let sum = arrayOne + arrayTwo;
  screenObject.output(sum);
  console.log(`this is ${arrayOne}`);
}
function subtract(arrayOne, arrayTwo) {
  let sum = arrayOne - arrayTwo;
  screenObject.output(sum);
}
function divide(arrayOne, arrayTwo) {
  let sum = arrayOne / arrayTwo;
  screenObject.output(sum);
}

function multiply(arrayOne, arrayTwo) {
  let sum = arrayOne * arrayTwo;
  screenObject.output(sum);
}

function filterOperators() {
  const arrayOneInt = parseFloat(screenObject.array1.join(""));
  const arrayTwoInt = parseFloat(screenObject.array2.join(""));
  console.log(`this is a ${screenObject.array1.join("")}`);
  if (screenObject.operator == "+") {
    add(arrayOneInt, arrayTwoInt);
  } else if (screenObject.operator == "-") {
    subtract(arrayOneInt, arrayTwoInt);
  } else if (screenObject.operator == "/") {
    divide(arrayOneInt, arrayTwoInt);
  } else if (screenObject.operator == "x") {
    multiply(arrayOneInt, arrayTwoInt);
  }
}

function clear(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      obj[key] = [];
    }
  }
  initialDisplay();
}

function deleteNumbers() {
  if (screenObject.array2.length > 0) {
    screenObject.array2.pop();
  } else if (screenObject.operator.length > 0) {
    screenObject.operator.pop();
  } else if (screenObject.array1.length > 0) {
    screenObject.array1.pop();
  }
  changeDisplay();
}
function initialDisplay() {
  const screen = document.querySelector("#screen");
  screen.textContent = "0";
}

function changeDisplay() {
  const screen = document.querySelector("#screen");
  const arrayOne = screenObject.array1.join("");
  const operators = screenObject.operator.join("");
  const arrayTwo = screenObject.array2.join("");
  const combined = arrayOne + "\xa0" + operators + "\xa0" + arrayTwo;
  screen.textContent = combined;
}

function numberInput(input) {
  if (screenObject.operator.length === 0) {
    screenObject.array1.push(input);
    console.table(screenObject.array1);
    changeDisplay();
    console.log(screenObject);
  } else if (screenObject.operator.length === 1) {
    screenObject.array2.push(input);
    changeDisplay();
  }
}
function operatorInput(input) {
  if (screenObject.array1.length > 0 && screenObject.operator.length === 0) {
    screenObject.operator.push(input);
    changeDisplay();
    console.log(screenObject);
  }
}

function events() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.some((number) => number === button.id)) {
        numberInput(button.id);
      } else if (operators.some((operator) => operator === button.id)) {
        operatorInput(button.id);
      } else if (button.id === "=") {
        filterOperators();
      } else if (button.id === ".") {
        numberInput(button.id);
      } else if (button.id === "clear") {
        clear(screenObject);
      } else if (button.id === "delete") {
        deleteNumbers();
      }
    });
  });
}
initialDisplay();
events();
