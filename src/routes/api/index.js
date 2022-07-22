const { Router } = require('express');
const users = require('./users');
const threads = require('./threads');
const comments = require('./comments');


const router = Router();

router.use('/users', users);
router.use('/threads', threads);
router.use('/comments', comments);

module.exports = router;