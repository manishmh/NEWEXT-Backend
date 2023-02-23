const express = require("express");
const router = new express.Router();
const inshorts = require('inshorts-news-api');



// //for next 25 news posts
// var options = {
//     lang: 'en',
//     category: '',
//     news_offset: '87w7oet4-1'
// }

// inshorts.getMoreNews(options, function (result, news_offset) {
//     console.log(result);
//     console.log(news_offset);
// });

router.get("/user", (req, res) => {
    res.send("user side");
});

router.get("/getdata", (req, res) => {

    const { len, categories } = req.body;

    var options = {
        lang: len,
        category: categories
    }
    inshorts.getNews(options, function (result, news_offset) {
        res.send(result);
    });
});

module.exports = router;