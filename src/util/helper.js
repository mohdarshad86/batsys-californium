const date = function () {
  console.log(new Date().getDate()); 
};
const month = function () {
  console.log(new Date().getMonth() + 1);

};
const batchInfo = function () {
  console.log("Californium, W3D4, the topic for today is Nodejs module system");
};

module.exports.printDate = date;
module.exports.printMonth = month;
module.exports.getBatchInfo = batchInfo;

