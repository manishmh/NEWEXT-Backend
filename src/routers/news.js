const express = require("express");
const router = new express.Router();
const { getMoreNews, getNews } = require("../controller/news");

router.get("/getnews", getNews);

router.get("/getmorenews", getMoreNews);

module.exports = router;    