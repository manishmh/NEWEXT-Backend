const express = require("express");
const router = new express.Router();
const inshorts = require('inshorts-news-api');

router.get("/getnews", (req, res) => {

    const { len, categories } = req.body;

    var options = {
        lang: len,
        category: categories
        // lang: 'en',
        // category: ''
    }
    inshorts.getNews(options, function (result, news_offset) {
        res.send(result);
    });
});

module.exports = router;
