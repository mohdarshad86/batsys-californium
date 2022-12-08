function printData(data) {
  console.log(data);
}

function greet(name) {
  console.log("Hi, " + name);
  console.log(new Date());
}

module.exports.printData = printData;
module.exports.greet = greet;
