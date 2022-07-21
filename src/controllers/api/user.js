const User = require('../../models/User');
const Comment = require('../../models/Comment');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const bcrypt = require('bcrypt');


const getUserById = (req, res) => {
    try {
        const { id } = req.params;
    
        const user = await User.findByPk(id, {
          include: [
            {
              model: Comment,
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

const loginUser = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password'],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) {
      return res.status(404).json({ message: 'user does not exist' });
    }

    const isValidPassword = bcrypt.compare(payload.password, user.password);

    if (!isValidPassword) {
      res.status(400).json({ message: 'Please provide email and password' });
    }

    return res.json({ message: 'Successfully logged in' });
  } catch ({ message = ' Something went wrong ' }) {
    return res.status(500).json({ message });
  }
};

const signupUser = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password', 'username'],
      req.body
    );

    if (Object.keys(payload).length !== 3) {
      return res
        .status(400)
        .json({ message: 'Please provide required fields' });
    }

    const user = await User.create(payload);

    return res.json(user);
  } catch ({ message = ' Something went wrong ' }) {
    return res.status(500).json({ message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password'],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) {
      return res.status(404).json({ message: 'user does not exist' });
    }

    await User.update(
      { password: payload.password },
      { where: { email: payload.email }, individualHooks: true }
    );

    return res.json({ message: 'Successfully reset password ' });
  } catch ({ message = ' Something went wrong ' }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
    getUserById,
    loginUser,
    signupUser,
    resetPassword,
};
