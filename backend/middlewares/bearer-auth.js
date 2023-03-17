const { isTokenValid } = require("../utils");
const { UnAuthenticatedError } = require("../errors");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
//   console.log("token", token);
  if (!token || !token.startsWith("Bearer ")) {
    throw new UnAuthenticatedError("no token provided");
  }
  try {
    const accessToken = token.split(" ")[1];
    const { id, name, role } = isTokenValid({ token: accessToken });
    req.user = { id, name, role };
    next();
  } catch (err) {
    throw new UnAuthenticatedError("Invalid Authenticated");
  }
};
