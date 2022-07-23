const { Router } = require('express');

const api = require('./api');
const view = require('./view');

const router = Router();

router.use('/', view);
router.use("/api", api);

module.exports = router;