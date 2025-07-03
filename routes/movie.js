var express = require("express");
var router = express.Router();
const movieDetails = require("../data/movieDetails");

function requireJSON(req, res, next) {
  if (!req.is("application/json")) {
    res.json({ message: "wrong content type" });
  } else {
    next();
  }
}

router.get("/top_rated", function (req, res, next) {
  let page = req.query.page;
  if (!page) page = 1;
  const results = movieDetails.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });
  const indexToStart = (page - 1) * 20;
  res.json(results.slice(indexToStart, indexToStart + 20));
});

router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const result = movieDetails.find((movie) => movie.id === Number(movieId));
  if (!result) {
    res.status(404);
    res.json({ message: "movie not found" });
  }
  res.json(result);
});

router.post("/:movieId/rating", requireJSON, (req, res, next) => {
  const movieId = req.params.movieId;
  const userRating = req.body.value;
  if (userRating < 0.5 || userRating > 10) {
    res.json({ message: "rating must be between 0.5 and 10" });
  } else {
    res.json({
      message: "Thank you for submitting your rating.",
      status_code: 200,
    });
  }
});

router.delete("/:movieId/rating", (req, res, next) => {
  res.json({ message: "rating successfully deleted" });
});

module.exports = router;
