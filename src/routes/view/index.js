const { Router } = require("express");
const { homePage, threadPage, userPage, signupPage, loginPage, profilePage } = require("../../controllers/view");

const router = Router();

router.get("/", homePage);
router.get("/thread/:id", threadPage);
router.get("/user/:id", userPage);
router.get("/signup", signupPage);
router.get("/login", loginPage);
router.get("/profile", profilePage);

module.exports = router;