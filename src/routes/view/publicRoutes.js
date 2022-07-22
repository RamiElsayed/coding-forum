const { Router } = require('express');
const {
  renderHomePage,
  renderSingleThreadPage,
  renderLoginPage,
  renderSignupPage,
} = require('../../controllers/view/publicRoutes');

const router = Router();

router.get('/', renderHomePage);
router.get('/threads/:id', renderSingleThreadPage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);

module.exports = router;
