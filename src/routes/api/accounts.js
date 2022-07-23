const { Router } = require('express');
const { loginUser, signupUser, resetPassword, logout } = require('../../controllers/api/accounts');


const router = Router();

router.post("/login", loginUser);
router.get("/logout", logout);
router.post("/signup", signupUser);
router.put("/reset-password", resetPassword);

module.exports = router;