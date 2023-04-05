const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) return string.length;
  if (stringLength > 10) return 'error, the string is too long';  
  return string.length;
};




console.log(calculator.add(.1, .2));

module.exports = { stringLength };