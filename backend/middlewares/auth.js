const { UnAuthenticatedError } = require("../errors");
const { isTokenValid } = require("../utils");

module.exports = (req, res, next) => {
  //
  try {
    const token = req.signedCookies.token;
    const { id, name, role } = isTokenValid({ token });
    req.user = { id, name, role };
    next()
  } catch (err) {
    throw new UnAuthenticatedError("Invalid Authenticated");
  }
};
