const { Router } = require('express');

const api = require('./api');
const views = require('./views');

const router = Router();

router.use('/api', api);
router.use('/views', views);

module.exports = router;