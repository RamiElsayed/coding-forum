const { Router } = require('express');
const { loginUser, signupUser, resetPassword, logout } = require('../../controllers/api/accounts');


const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.put("/reset-password", resetPassword);

module.exports = router;