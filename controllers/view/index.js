const { Router } = require('express');

const { renderComments, renderthread } = require('.');

const router = Router();

router.get('/', renderComments);
router.get('/thread', renderthread);

module.exports = router;