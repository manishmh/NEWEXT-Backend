const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const { signupUser, signinUser, signoutUser } = require("../controller/user");

router.post("/signup", signupUser);

router.post("/signin", signinUser);

router.get("/signout", auth, signoutUser);

module.exports = router;