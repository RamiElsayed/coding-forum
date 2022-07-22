const { Router } = require('express');
const { loginUser, signupUser, resetPassword, getUserById } = require('../../controllers/api/users');


const router = Router();

router.get('/:id', getUserById);
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.put('/reset', resetPassword);

module.exports = router;