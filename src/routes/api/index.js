const { Router } = require('express');
const user = require('./user');
const thread = require('./thread');


const router = Router();

router.use('/user', user);
router.use('/thread', thread);

module.exports = router;