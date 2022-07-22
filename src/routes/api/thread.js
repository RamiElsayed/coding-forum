const { Router } = require('express');
const { getThreads, getThreadById, createThread } = require('../../controllers/api/thread');


const router = Router();

router.get('/', getThreads);
router.get('/:id', getThreadById);

// 
// 

module.exports = router;