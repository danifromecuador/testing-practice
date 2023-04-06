const { stringLength, reverseString, calculator, capitalize } = require('./index.js');

// TASK 1  ////////////////////////////////////////////////////////////////////////////////////////
test('return the length of the string', () => {
  expect(stringLength('123456789ab')).toBe(11);
});

test('check if the string has at least one character', () => {
  expect(stringLength('1')).toBeGreaterThan(0);
});

test('check if the string length has 10 or less characters', () => {
  expect(stringLength('123456789a')).toBeLessThanOrEqual(10);
});

// TASK 2 /////////////////////////////////////////////////////////////////////////////////////////
test('check if the string was reversed', () => {
  expect(reverseString('abc123')).toBe('321cba');
});

// TASK 3 /////////////////////////////////////////////////////////////////////////////////////////
describe('add', () => {
    test('add 2 and 3', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
    test('add -2 and -5', () => {
      expect(calculator.add(-2, -5)).toBe(-7);
    });
    test('add 0.1 and 0.2', () => {
      expect(calculator.add(0.1, 0.2)).toBe(0.30000000000000004);
    });
});

describe('subtract', () => {
  test('subtracts 2 and 3', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  test('subtracts -2 and -3', () => {
    expect(calculator.subtract(-2, -3)).toBe(1);
  });
  test('subtracts 0.3 and 0.1', () => {
    expect(calculator.subtract(0.3, 0.1)).toBe(0.19999999999999998);
  });
});

describe('multiply', () => {
  test('multiply 2 and 0', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
  });
  test('multiply 2 and 1.333', () => {
    expect(calculator.multiply(2, 1.333)).toBe(2.666);
  });
  test('multiply -2 and -3', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});

describe('divide', () => {
  test('divide 2 and 4', () => {
    expect(calculator.divide(2, 4)).toBe(0.5);
  });
  test('divide -2/-4', () => {
    expect(calculator.divide(2, 4)).toBe(0.5);
  });
  test('divide 2 and 0', () => {
    expect(calculator.divide(2, 0)).toBe(Infinity);
  });
});

// TASK 4 /////////////////////////////////////////////////////////////////////////////////////////
test('capitalize', () => {
  expect(capitalize('mouse')).toBe('Mouse');
});
