const { Router } = require('express');
const { loginUser, signupUser, resetPassword, logout } = require('../../controllers/api/accounts');


const router = Router();

router.get("/login", loginUser);
router.get("/logout", logout);
router.get("/signup", signupUser);
router.put("/reset-password", resetPassword);

module.exports = router;