const { Router } = require('express');
const { getUserById } = require('../../controllers/api/users');


const router = Router();

router.get("/:id", getUserById);

module.exports = router;