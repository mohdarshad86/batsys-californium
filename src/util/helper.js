const date = function () {
  console.log(new Date().getDate());
};
const month = function () {
  console.log(new Date().getMonth() + 1);

};
const batchInfo = function () {
  console.log("Californium, W3D4, the topic for today is Nodejs module system");
};

module.exports.myDate = date;
module.exports.myMonth = month;
module.exports.myBatch = batchInfo;

