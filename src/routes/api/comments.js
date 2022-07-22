const { Router } = require('express');

const router = Router();

router.post('/write-comment', writeComment);
router.delete('/delete-comment', deleteComment);

module.exports = router;