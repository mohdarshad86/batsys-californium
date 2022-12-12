const express = require("express");
const router = express.Router();

router.get("/sol1", function (req, res) {
  let arr = [1, 2, 3, 4, 5, 7, 8, 9];

  let n = arr.length - 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let missingNumber = (arr[n] * (arr[n] + 1)) / 2 - sum;
  res.send({ data: missingNumber });
});

router.get("/sol2", function (req, res) {
  let array = [33, 34, 35, 37, 38];

  let n = array.length;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let missingNumber = ((n + 1) * (array[0] + array[n - 1])) / 2 - sum;
  res.send({ data: missingNumber });
});

router.get("/sol1-part2", function (req, res) {
  let array = [1, 2, 3, 4, 5, 7, 8, 9, 11];
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      arr.push(array[i] + 1);
    }
  }
  res.send({ data: arr });
});

module.exports = router;
