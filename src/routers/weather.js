const express = require("express");
const router = new express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/getweather", async (req, res) => {
    try {
        const city = req.query.city;
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
        console.log(data);
        res.send(data).status(200);
    } catch (error) {
        console.log("Error")
        res.send(error).status(400);
    }
})

module.exports = router;