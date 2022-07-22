const { Router } = require('express');
const { loginUser, signupUser, resetPassword } = require('../../controllers/api/accounts');


const router = Router();

router.get("/login", loginUser);
router.get("/signup", signupUser);
router.put("/reset-password", resetPassword);

module.exports = router;