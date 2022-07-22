const { Router } = require('express');

const router = Router();

router.get('/user/:id', getUserById);
router.post('/create-thread', renderCreateThreadPage);
router.post('/write-comment', writeComment);
router.put('/edit-thread', renderEditThreadPage);
router.delete('/delete-thread', deleteThread);
router.delete('/delete-comment', deleteComment);

module.exports = router;