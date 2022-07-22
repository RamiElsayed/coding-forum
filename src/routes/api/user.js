const { Router } = require('express');
const { loginUser, signupUser, resetPassword, getUserById } = require('../../controllers/api/user');


const router = Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.put('/reset', resetPassword);

module.exports = router;