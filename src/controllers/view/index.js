const { Thread, User, Comment } = require('../../models');

const homePage = async (req, res) => {
  const threads = (
    await Thread.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
  ).map((x) => x.dataValues);
  return res.render('home', { threads });
};

const threadPage = async (req, res) => {
  try {
    const threadFromDB = await Thread.findByPk(req.params.id);

    const thread = threadFromDB.get({ plain: true });

    return res.render('Thread', { thread, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(`[ERROR]: Failed to load gallery page | ${err.message}`);
    return res.render('error');
  }
};
const userPage = async (req, res) => {};
const signupPage = (req, res) => {
  return res.render('signUp');
};
const loginPage = (req, res) => {
  return res.render('login');
};
module.exports = {
  homePage,
  threadPage,
  userPage,
  signupPage,
  loginPage,
};
