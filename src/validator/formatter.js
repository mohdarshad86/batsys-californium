const trimed = function () {
  console.log("functionUp    ".trim());
};

const lowerCase = function () {
  console.log("FunCTionUp".toLowerCase());
};
const upperCase = function () {
  console.log("functionUp".toUpperCase());
};

module.exports.trim = trimed;
module.exports.changetoLowerCase = lowerCase;
module.exports.changeToUpperCase = upperCase;
