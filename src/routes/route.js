const e = require("express");
const express = require("express");
const router = express.Router();
const { route } = require("express/lib/application");

// ques- add Element in array

router.post("/test-post4", function (req, res) {
  let arr = [12, "functionup"];
  let ele = req.body.element;

  arr.push(ele);

  res.send({ msg: arr, status: true });
});

//assignment 1

let players = [
  {
    name: "batman",
    dob: "1/1/1989",
    gender: "male",
    city: "gotham",
    sports: ["swimming"],
  },
  {
    name: "superman",
    dob: "1/09/1976",
    gender: "male",
    city: "metropolis",
    sports: ["soccer"],
  },
  {
    name: "cyborg",
    dob: "1/1/1990",
    gender: "male",
    city: "central city",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  let bodyName = req.body.name;

  let play = players.find((x) => x.name === bodyName);

  if (play) {
    res.send({ data: players, status: true });
  } else {
    //just push the body object to the players object
    players.push(req.body);
    res.json({ data: players, status: true });
  }
});

module.exports = router;
