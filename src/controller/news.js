const inshorts = require('inshorts-news-api');

const getNews = (req, res) => {
    const l = req.query.lang;
    const c = req.query.category;
    var options = {
        lang: l,
        category: c
    }
    try {
        inshorts.getNews(options, function (result, news_offset) {
            res.send({ result: result, newId: news_offset }).status(201);
        });
    } catch (error) {
        res.send(error).status(400)
    }
}

const getMoreNews = (req, res) => {
    const l = req.query.lang;
    const c = req.query.category;
    const id = req.query.id;
    var options = {
        lang: l,
        category: c,
        news_offset: id
    }
    try {
        inshorts.getNews(options, function (result, news_offset) {
            res.send({ result: result, newId: news_offset }).status(201);
        });
    } catch (error) {
        res.send(error).status(400)
    }
}

module.exports = {
    getNews,
    getMoreNews,
}