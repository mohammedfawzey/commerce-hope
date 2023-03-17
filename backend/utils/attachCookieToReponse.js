const createToken = require("./createToken");
module.exports = ({ user, res }) => {
  const token = createToken({ user });
  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    signed: true,
  };
  return res.cookie("token", token, cookieOptions);
};
