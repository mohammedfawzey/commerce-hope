module.exports = ({ user }) => {
  const { password, ...userInfo } = user.toJSON();
  return userInfo;
};
