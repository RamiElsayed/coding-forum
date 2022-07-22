const {Comment, User} = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const bcrypt = require('bcrypt');



const getUserById =  async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      include: [
        {
          model: Comment,
          attributes:['comment']
        },
      ],
    });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res.status(500).json({ error: "Failed to get user" });
  }
  
};

;

module.exports = {
    getUserById,
};
