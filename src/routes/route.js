const express = require("express");
const router = express.Router();

//p1
router.get("/movies", function (req, res) {
  //route handeler

  const movies = [
    "Man of Steel",
    "Batman v Superman",
    "Wonder Women",
    "Zack Snyder's Justice League",
  ];

  res.send(movies);
});

//p2
router.get("/movies/:indexNumber", function (req, res) {
  let i = req.params.indexNumber;

  // route handler
  const movies = [
    "Man of Steel",
    "Batman v Superman",
    "Wonder Women",
    "Zack Snyder's Justice League",
  ];
  res.send(movies[i]);

  //p3
  if (i > 0 && i < movies.length) {
    res.send(movies[i]);
  } else {
    res.send("Index is not defined, use a valid index");
  }
});
//p4
router.get("/films", function (req, res) {
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  res.send(films);
});

//p5
router.get("/films/:filmId", function (req, res) {
  let index = req.params.filmId;
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  let film = films.find((x) => x.id == index);
  if (film) {
    res.send(film);
  } else {
    res.send("No movie exists with this id");
  }
});

module.exports = router;
