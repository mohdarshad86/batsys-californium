async function checkIsLogin(req, res, next) {
  console.log("yes logIn");

  const isLoginned = true;
  if (isLoginned) {
    next();
  } else {
    return res.send({ status: false, msg: "please log in first" });
  }
}
module.exports = { checkIsLogin };
