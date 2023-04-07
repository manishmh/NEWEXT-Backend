const express = require("express");
const router = new express.Router();
const { getWeatherReport } = require("../controller/weather");

router.get("/getweather", getWeatherReport)

module.exports = router;