const { Router } = require('express');
const { writeComment } = require('../../controllers/api/comments');

const router = Router({ mergeParams: true });

router.post('/', writeComment);
// router.delete('/delete-comment', deleteComment);

module.exports = router;