const { stringLength, reverseString, calculator} = require('./index.js');
const stringToBeTested = 'danieldel';
const firstNumer = 2;
const secondNumer = 3;

test('return the length of the string', () => {
  expect(stringLength(stringToBeTested)).toBe(stringToBeTested.length);
});

test('check if the string has at least one character', () => {
  expect(stringLength(stringToBeTested)).toBeGreaterThan(0);
});

test('check if the string length has 10 or less characters', () => {
  expect(stringLength(stringToBeTested)).toBeLessThanOrEqual(10);
});

test('check if the string was reversed', () => {
  expect(reverseString(stringToBeTested)).toBe(stringToBeTested.split('').reverse().join(''));
});


describe('calculator', () => {
    test('adds two numbers', () => {
      expect(calculator.add(firstNumer, secondNumer)).toBe(firstNumer + secondNumer);
    });
    test('subtracts two numbers', () => {
      expect(calculator.subtract(firstNumer, secondNumer)).toBe(firstNumer - secondNumer);
    }); 
    test('multiply two numbers', () => {
      expect(calculator.multiply(firstNumer, secondNumer)).toBe(firstNumer * secondNumer);
    });
    test('divide two numbers', () => {
      expect(calculator.divide(firstNumer, secondNumer)).toBe(firstNumer / secondNumer);
    });
      
});