const expressAsyncHandler = require("express-async-handler");
require("dotenv").config();
const axios = require("axios");

const getWeatherReport = expressAsyncHandler(async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );
    res.send(data).status(200);
  } catch (error) {
    console.log("Error");
    res.send(error).status(400);
  }
});

module.exports = {
  getWeatherReport,
};
