const { Thread, User, Comment } = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');

const writeComment = async (req, res) => {
    try {
        const payload = getPayloadWithValidFieldsOnly(['comment'], req.body);
        console.log('confirm');
        if (Object.keys(payload).length !== 1) {
          console.log(`[ERROR]: Failed to create comment| Invalid Field`);
          return res
            .status(400)
            .json({ message: 'Please provide write a comment before submitting' });
        }
        console.log('confirm');
        await Comment.create({
          ...payload,
          user_id: req.session.user.id,
          thread_id: req.params.id
        });
         console.log('confirm');
        return res.json({ message: 'Comment created successfully' });
      } catch (error) {
        console.log(`[ERROR]: Failed to create thread | ${error.message}`);
        return res.status(500).json({ error: 'Failed to create thread' });
      }
};
// const deleteComment = (req, res) => {

// };

module.exports = {
  writeComment,
//   deleteComment,
};
