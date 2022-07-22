// const { Thread, User, Comment } = require('../../models');
// const { getPayloadWithValidFieldsOnly } = require('../../helpers');

// const getThreads = async (req, res) => {
//   try {
//     const threads = await Thread.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['first_name', 'last_name'],
//         },
//       ],
//     });
//     if (!threads) {
//       return res.status(404).json({ error: 'Thread not found' });
//     }

//     return res.json({ data: threads });
//   } catch (error) {
//     console.log(`[ERROR]: Failed to get thread | ${error.message}`);
//     return res.status(500).json({ error: 'Failed to get thread' });
//   }
// };

// const getThreadById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const thread = await Thread.findByPk(id, {
//       include: [
//         {
//           model: Comment,
//           attributes: ['comment'],
//         },
//         {
//           model: User,
//           attributes: ['first_name', 'last_name'],
//         },
//       ],
//     });
//     if (!thread) {
//       return res.status(404).json({ error: 'Thread not found' });
//     }

//     return res.json({ data: thread });
//   } catch (error) {
//     console.log(`[ERROR]: Failed to get Thread | ${error.message}`);
//     return res.status(500).json({ error: 'Failed to get Thread' });
//   }
// };

// const createThread = async (req, res) => {
//   try {
//     const payload = getPayloadWithValidFieldsOnly(
//       ['title', 'body', 'user_id'],
//       req.body
//     );

//     if (Object.keys(payload).length !== 3) {
//       return res
//         .status(400)
//         .json({ message: 'Please provide required fields' });
//     }

//     const thread = await Thread.create(payload);

//     return res.json(thread);
//   } catch ({ message = ' Something went wrong ' }) {
//     return res.status(500).json({ message });
//   }
// };

// module.exports = { getThreads, getThreadById, createThread };
