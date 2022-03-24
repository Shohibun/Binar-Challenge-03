var express = require("express");
var router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

// eslint-disable-next-line no-unused-vars
router.get("/dashboard", function(req, res, next) {
  res.send("respond with a resource");
});

// eslint-disable-next-line no-unused-vars
router.get("/list-car", function(req, res, next) {
  res.send("respond with a resource");
});

// eslint-disable-next-line no-unused-vars
router.get("/add-new-car", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
