const { Router } = require('express');

const user = require('./user');
const thread = require('./thread');
const comments = require('./comments');

const router = Router();

router.use('/user', user);
router.use('/thread', thread);
router.use('/comments', comments);

module.exports = router;
