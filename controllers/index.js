const { Router } = require('express');

const views = require('./view/index');
const api = require('./api/index');

const router = Router();

router.use('/api', api);
router.use('/', views);

module.exports = router;