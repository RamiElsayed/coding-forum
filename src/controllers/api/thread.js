const { Thread, User } = require('../../models');

const getThreads = async (req, res) => {
    try {
        const threads = await Thread.findAll({
          include: [
            {
              model: User,
              attributes:['first_name', 'last_name']
            },
          ],
        });
        if (!threads) {
          return res.status(404).json({ error: "Thread not found" });
        }
    
        return res.json({ data: threads });
      } catch (error) {
        console.log(`[ERROR]: Failed to get thread | ${error.message}`);
        return res.status(500).json({ error: "Failed to get thread" });
      }
}

module.exports = { getThreads };