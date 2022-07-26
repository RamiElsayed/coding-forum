const { Router } = require('express');
const { deleteThreadById, createThread } = require('../../controllers/api/threads');
const { auth } = require('../../middlewares/auth');


const router = Router();


router.delete('/:id',auth , deleteThreadById);
router.post('/',auth, createThread);

module.exports = router;