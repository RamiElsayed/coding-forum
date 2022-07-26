const { Thread, User, Comment } = require('../../models');

const homePage = async (req, res) => {
  const { loggedIn } = req.session;
  const threads = (
    await Thread.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        },
      ],
    })
  ).map((thread) => thread.get({ plain: true }));

  console.log(threads);

  return res.render('home', { threads, loggedIn });
};

const createThreadPage = async (req, res) => {
  return res.render('createThreadPage');
};

const threadPage = async (req, res) => {
  console.log(req.session);
  const { loggedIn, user } = req.session;
  const threadFromDB = await Thread.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'id'],
      },
      {
        model: Comment,
        include: 
          [{
            model: User,
            attributes: ['username', 'email'],
          }],
      },
    ]
  });
  thread = threadFromDB.get({plain: true});
  
  console.log(thread);

  const isMyThread = loggedIn && user.id === thread.user.id;

  return res.render('thread', { thread, loggedIn, isMyThread });
};
const userPage = async (req, res) => {
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
  return res.render('user');
};
const signupPage = (req, res) => {
  if (!req.session.loggedIn) {
    return res.render('signup');
  }
  return res.redirect('/');
};
const loginPage = (req, res) => {
  if (!req.session.loggedIn) {
    return res.render('login');
  }

  return res.redirect('/');
};

const profilePage = async (req, res) => {
  const { loggedIn, user } = req.session;
  const threadsFromDB = await Thread.findAll({
    where: {
      user_id: req.session.user.id,
    },
    include: [
      {
        model: User,
        attributes: ['username', 'email'],
      },
    ],
  });

  const threads = threadsFromDB.map((thread) => thread.get({ plain: true }));

  return res.render('profile', { loggedIn, threads, user });
};
module.exports = {
  homePage,
  createThreadPage,
  threadPage,
  userPage,
  signupPage,
  loginPage,
  profilePage,
};
