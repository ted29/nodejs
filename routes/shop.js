const path = require("path");

const express = require("express");

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
// router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
//35548990748
module.exports = router;
