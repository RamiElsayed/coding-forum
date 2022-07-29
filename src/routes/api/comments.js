const { Router } = require('express');
const { writeComment } = require('../../controllers/api/comments');

const router = Router();

router.post('/writeComment', writeComment);
// router.delete('/delete-comment', deleteComment);

module.exports = router;