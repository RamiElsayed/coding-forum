const { Comment } = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');

const writeComment = async (req, res) => {
    try {
        const payload = getPayloadWithValidFieldsOnly(['comment'], req.body);

       
        const regex = RegExp(/^[\s+]/gm);
        const invalid = regex.test(...Object.values(payload));

        if (Object.values(payload).includes('') || invalid) {
          console.log(`[ERROR]: Failed to create comment| Invalid Field`);
          return res
            .status(400)
            .json({ message: 'Please provide write a comment before submitting' });
        }
        
        await Comment.create({
          ...payload,
          user_id: req.session.user.id,
          thread_id: req.params.threadId
        });
         
        return res.json({ message: 'Comment created successfully' });
      } catch (error) {
        console.log(`[ERROR]: Failed to create comment | ${error.message}`);
        return res.status(500).json({ error: 'Failed to create comment' });
      }
};
const deleteComment = async (req, res) => {
  console.log(req.params)
  try {
    await Comment.destroy({
      where: {
        id: req.params.commentId,
      },
    });
  
    return res.json({ message: 'Successfully deleted comment' });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete comment | ${error.message}`);
    return res.status(500).json({ error: 'Failed to delete comment' });
  }
};

module.exports = {
  writeComment,
  deleteComment,
};
