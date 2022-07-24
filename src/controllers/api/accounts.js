const { Thread, Comment, User } = require('../../models');
const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const bcrypt = require('bcrypt');

const signupUser = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['username', 'email', 'password', 'aboutme'],
      req.body
    );

    if (Object.keys(payload).length !== 4) {
      console.log(`[ERROR]: Failed to sign up | Invalid fields`);
      return res.status(400).json({ error: 'Failed to sign up' });
    }

    const user = await User.create(payload);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: user.get('id'),
        username: user.get('username'),
        email: user.get('email'),
      };
      return res.json({ message: 'Successfully created user' });
    });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    return res.status(500).json({ error: 'Failed to sign up' });
  }
};

const loginUser = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password'],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({ error: 'Please provide valid fields' });
    }

    const user = await User.findOne({
      where: {
        email: payload.email,
      },
      include: [
        {
          model: Thread,
          attributes: ['title', 'body', 'date_created', 'user_id'],
        },
      ],
    });

    if (!user) {
      console.log('[ERROR]: Failed to login | User does not exist');
      return res.status(404).json({ error: 'Failed to login' });
    }

    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      console.log('[ERROR]: Failed to login | Invalid password');
      return res.status(401).json({ error: 'Failed to login' });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: user.get('id'),
        username: user.get('username'),
        email: user.get("email"),
      };

      return res.json({ message: 'logged in successfully' });
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    return res.status(500).json({ error: 'Failed to login' });
  }
};

const logout = (req, res) => {
  // if (req.session.loggedIn) {
  //   req.session.destroy(() => {
  //     return res.status(204).end();
  //   });
  // } else {
  //   return res.status(404).end();
  // }
  req.session.destroy();

  return res.redirect('/login');
};

const resetPassword = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(['email'], req.body);
    if (Object.keys(payload).length !== 1) {
      return res.status(400).json({ message: 'Please provide email' });
    }
    const user = await User.findOne({ where: { email: payload.email } });
    if (!user) {
      return res
        .status(404)
        .json({ message: 'Please check you have entered the right email' });
    }
    await User.update(
      { password: payload.password },
      { where: { email: payload.email }, individualHooks: true }
    );
    return res.json({ message: ' Password updated successfully' });
  } catch ({ message = ' Something went wrong ' }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  resetPassword,
  logout,
};
