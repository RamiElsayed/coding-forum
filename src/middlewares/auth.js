const auth = (req, res, next) => {
  if (req.session.loggedIn) {
    console.log(`[INFO]: User ${req.session.username} is in session`);
    return next();
  }
 alert("You need to login")
  return res.redirect("/login");
};

module.exports = { auth };
