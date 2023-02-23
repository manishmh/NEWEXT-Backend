const inshorts = require('inshorts-news-api');

var options = {
    lang: 'en',
    category: 'sports'
}

inshorts.getNews(options, function (result, news_offset) {
    console.log(result);
    console.log(news_offset);
});

//for next 25 news posts
var options = {
    lang: 'en',
    category: '',
    news_offset: '87w7oet4-1'
}

inshorts.getMoreNews(options, function (result, news_offset) {
    console.log(result);
    console.log(news_offset);
});