const trimed = function () {
  console.log("functionUp  ".trim());
};

const lowerCase = function () {
  console.log("FunctionUp".toLowerCase());
};
const upperCase = function () {
  console.log("FunctionUp".toUpperCase());
};

module.exports.trim = trimed;
module.exports.changetoLowerCase = lowerCase;
module.exports.changeToUpperCase = upperCase;
