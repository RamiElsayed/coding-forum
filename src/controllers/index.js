const { Router } = require('express');


const api = require('./api/index');

const router = Router();

router.use('/api', api);


module.exports = router;