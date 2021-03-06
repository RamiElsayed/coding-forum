const { Thread, User, Comment } = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');

const getThreads = async (req, res) => {
  try {
    const threads = await Thread.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    if (!threads) {
      return res.status(404).json({ error: 'Thread not found' });
    }

    return res.json({ data: threads });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thread | ${error.message}`);
    return res.status(500).json({ error: 'Failed to get thread' });
  }
};

const getThreadById = async (req, res) => {
  try {
    const { id } = req.params;

    const thread = await Thread.findByPk(id, {
      include: [
        {
          model: Comment,
          attributes: ['comment'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }

    return res.json({ data: thread });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thread | ${error.message}`);
    return res.status(500).json({ error: 'Failed to get Thread' });
  }
};

const createThread = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(['title', 'body'], req.body);

    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ message: 'Please provide required fields' });
    }

    await Thread.create({
      ...payload,
      user_id: req.session.user.id,
    });

    return res.json({ message: "Successfully created thread" });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thread | ${error.message}`);
    return res.status(500).json({ error: "Failed to create thread" });
  }
};

module.exports = { getThreads, getThreadById, createThread };
