const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  const initialValue = 0;
  let reduction = a.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return reduction;
};

const multiply = function (a) {
  let multiply = a.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return multiply;
};

const power = function (a, b) {
  let numbers = [];
  while (b > 0) {
    numbers.push(a);
    b--;
  }
  let power = numbers.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );

  return power;
};

const factorial = function (a) {
  let numbers = [];
  if (a === 0 || a === 1) {
    return 1;
  } else if (a === 2) {
    return 2;
  } else {
    while (a > 1) {
      numbers.push(a);
      a--;
    }
    let factorial = numbers.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
