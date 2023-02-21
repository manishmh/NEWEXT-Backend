const express = require("express");
const router = new express.Router();

router.get("/user", (req, res) => {
    res.send("user side");
})

router.get("", (req, res) => { 
    
})

module.exports = router;