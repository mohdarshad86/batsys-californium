const check = function (req, res, next) {
  if (req.headers.isfreeappuser) {
    req.body.isFreeAppUser = req.headers.isfreeappuser;
    next();
  } else return res.send({ error: "Request is missing a mandatory header" });
};
module.exports.check = check;
