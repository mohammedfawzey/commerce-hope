module.exports = ({ user }) => {
  const name = user.firstName + " " + user.lastName;
  return { id: user._id, name, role: user.role || "user" };
};
