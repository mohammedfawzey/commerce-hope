const jwt = require("jsonwebtoken");
const shortenUser = require("./shortenUser");
module.exports = ({ user }) => {
  return jwt.sign(shortenUser({ user }), process.env.JWT_SECRET);
};
