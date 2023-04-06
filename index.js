const stringLength = (string) => { 
  return string.length;
};

const reverseString = (string) => {
  let array = string.split('');
  let newArr = [];
  let lastArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  lastArr = newArr.join('');
  return lastArr;
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) =>  a / b,
};

const capitalize = (string) => {
  let firstLetterInUpperCase = string.charAt(0).toUpperCase();
  return firstLetterInUpperCase + string.substring(1);
};

module.exports = { stringLength, reverseString, calculator, capitalize }