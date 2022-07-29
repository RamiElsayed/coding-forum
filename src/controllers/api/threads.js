const { Thread, User, Comment } = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');

const deleteThreadById = async (req, res) => {
  try {
    await Thread.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    await Comment.destroy({
      where: {
        thread_id: req.params.id,
      },
    });
    return res.json({ message: 'Successfully deleted thread' });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thread | ${error.message}`);
    return res.status(500).json({ error: 'Failed to delete thread' });
  }
};

const createThread = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(['title', 'body'], req.body);
    
    
    const regex =  RegExp(/^[\s+]/gm)
    const invalid = regex.test(...Object.values(payload));
    
    if ([...Object.values(payload)].includes('') ||  invalid) {
      console.log(`[ERRO]: Failed to create thread| Invalid Fields`);
      return res
        .status(400)
        .json({ message: 'Please provide required fields' });
    }

    await Thread.create({
      ...payload,
      user_id: req.session.user.id,
    });

    return res.json({ message: 'Successfully created thread' });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thread | ${error.message}`);
    return res.status(500).json({ error: 'Failed to create thread' });
  }
};

module.exports = { createThread, deleteThreadById };
