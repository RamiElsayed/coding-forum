const { Router } = require('express');
const { writeComment, deleteComment } = require('../../controllers/api/comments');

const router = Router({ mergeParams: true });

router.post('/', writeComment);
router.delete('/:commentId', deleteComment);

module.exports = router;