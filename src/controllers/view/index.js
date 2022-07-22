const homePage = (req, res) => {
    return res.render("home");
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
