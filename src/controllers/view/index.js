const { Thread, User } = require("../../models");

const homePage = async (req, res) => {
    const threads = (await Thread.findAll({
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })).map(x => x.dataValues);
  return res.render("home", {threads});
}
const threadPage = (req, res) => {
    return res.render("thread");
};
const userPage = (req, res) => {
    return res.render("user");
};
const signupPage = (req, res) => {
    return res.render("signUp");
};
const loginPage = (req, res) => {
    return res.render("login");
};
module.exports = {
homePage,
  threadPage,
  userPage,
  signupPage,
  loginPage,
};
