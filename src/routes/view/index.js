const { Router } = require("express");
const { homePage, threadPage, userPage, signupPage, loginPage } = require("../../controllers/view");

const router = Router();

router.get("/", homePage);
router.get("/thread/:id", threadPage);
router.get("/user/:id", userPage);
router.get("/signup", signupPage);
router.get("/login", loginPage);

module.exports = router;