const express = require("express");
const router = express.Router();

const logg = require("../logger/logger");

const helper = require("../util/helper");

const formatt = require("../validator/formatter");

const lodash = require("lodash");

router.get("/test-me", function (req, res) {
  //p1
  logg.welcome();

  //p2
  helper.printDate();
  helper.printMonth();
  helper.getBatchInfo();

//   //p3
  formatt.trim();
  formatt.changetoLowerCase();
  formatt.changeToUpperCase();

  //p4
  //(i)
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(lodash.chunk(monthName, 3));

  //(ii)
  const oddNums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(lodash.tail(oddNums));

  // (iii)
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];
  const arr3 = [3, 8, 5];
  const arr4 = [4, 11, 6];
  const arr5 = [5, 123, 7];

  console.log(lodash.union(arr1, arr2, arr3, arr4, arr5));

//   // (iv)
  const movies = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  console.log(lodash.fromPairs(movies));

  res.send("My first ever api!");
});

module.exports = router;
