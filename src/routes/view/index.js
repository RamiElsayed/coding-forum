const { Router } = require("express");
const { homePage, threadPage, userPage, signupPage, loginPage, profilePage, createThreadPage } = require("../../controllers/view");
const { auth } = require("../../middlewares/auth")

const router = Router();

router.get("/", homePage);
router.get("/create-thread", auth, createThreadPage);
router.get("/thread/:id", threadPage);
router.get("/user/:id", userPage);
router.get("/signup", signupPage);
router.get("/login", loginPage);
router.get("/profile", auth, profilePage);

module.exports = router;