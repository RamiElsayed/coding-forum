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
  const threadFromDB = await Thread.findByPk(req.params.id);

  const thread = threadFromDB.get({ plain: true });

  return res.render('Thread', { thread, loggedIn: req.session.loggedIn });
};
const userPage = async (req, res) => {};
const signupPage = (req, res) => {
  if (!req.session.loggedIn) {
    return res.render("signup");
  }

  return res.redirect("/");
};
const loginPage = (req, res) => {
  if (!req.session.loggedIn) {
    return res.render('login');
  }

  return res.redirect('/');
};

const profilePage = async (req, res) => {
  // const { loggedIn, user } = req.session;

  // const threadsFromDB = await Thread.findAll({
  //   where: {
  //     user_id: req.session.user.id,
  //   },
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['username', 'email'],
  //     },
  //   ],
  // });

  // const threads = threadsFromDB.map((thread) => thread.get({ plain: true }));
  //  { loggedIn, threads, user }
  return res.render('profile');
};
module.exports = {
  homePage,
  threadPage,
  userPage,
  signupPage,
  loginPage,
  profilePage,
};
