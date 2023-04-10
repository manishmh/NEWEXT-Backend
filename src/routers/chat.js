const express = require("express");
const auth = require("../middleware/auth");
const { accessChat, fetchChats } = require("../controller/chat");
const router = new express.Router();

router.route('/').post(auth, accessChat).get(auth, fetchChats);

module.exports = router;
