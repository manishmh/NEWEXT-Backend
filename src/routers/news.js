const express = require("express");
const router = new express.Router();
const inshorts = require('inshorts-news-api');

router.get("/getnews", (req, res) => {

    const { lang, category } = req.body;

    try {
        var options = {
            lang: lang,
            category: category
        }
        inshorts.getNews(options, function (result) {
            res.send(result).status(201);
        });
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
