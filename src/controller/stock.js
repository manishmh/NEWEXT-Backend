const expressAsyncHandler = require("express-async-handler");
const axios = require("axios");

const getStockReport = expressAsyncHandler(async (req, res) => {
    try {
        const { data } = await axios.get("https://latest-stock-price.p.rapidapi.com/price", {
            params: { Indices: 'NIFTY 50' },
            headers: {
                'X-RapidAPI-Key': '5d73a9d90dmsh71d9999bae6b5b8p1c2bd7jsn44b46aa9f709',
                'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
            }
        });
        res.send(data).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
})

module.exports = {
    getStockReport,
}



