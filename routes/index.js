var express = require("express");
var router = express.Router();
const movies = require("../data/movies");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/most_popular", (req, res, next) => {
  let page = req.query.page || 1;

  let results = movies.filter((movie) => {
    return movie.most_popular;
  });
  const indexToStart = (page - 1) * 20;
  results = results.slice(indexToStart, indexToStart + 19);
  res.json({ results });
});
module.exports = router;
