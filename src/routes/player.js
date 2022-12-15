const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
    bookings: [],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
    bookings: [],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
    bookings: [],
  },
];

router.post("/players", function (req, res) {
  //first extract name from request body
  let bodyName = req.body.name;
  //find if the name already exist
  let player = players.find((x) => x.name === bodyName);

  if (player) {
    //if exist then just print old data
    res.send("Player already exist");
  } else {
    //else push this data to our players array
    player.push(req.body);
    res.send({ data: players, status: true });
  }
});

router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
    //declare playerName & playerId from params
  let playerName = req.params.playerName;
  let BookingId = req.params.bookingId;

  //now check if playerName already exists or not
  let player = players.find((x) => x.name === playerName);

  //if exist then check if booking done or not 
  if (player) {
    //if booking already exist then print booking done
    if (player.bookings.find((x) => x.bookingNumber == BookingId)) {
      res.send(" Booking was already processed");

      //else book the player
    } else {
      player.bookings.push(req.body);
      res.send({ data: player, status: true });
    }

    //if playerName is not exist then print user not found
  } else {
    res.send("User Not found");
  }
});

module.exports = router;
