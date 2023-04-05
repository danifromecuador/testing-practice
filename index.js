const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) return string.length;
  if (stringLength > 10) return 'error, the string is too long';  
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


console.log(calculator.add(.1, .2));

module.exports = { stringLength, reverseString, calculator }