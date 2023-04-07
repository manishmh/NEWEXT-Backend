const express = require("express");
const { getStockReport } = require("../controller/stock");
const router = new express.Router();

router.get('/getstocks', getStockReport)

module.exports = router;
