const router = require("express").Router();
// const authenticateUser = require("../middlewares/auth");
const authenticateUser = require("../middlewares/bearer-auth");
const {
  login,
  logout,
  register,
  currentUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  changePassword,
} = require("../controllers/auth");
// get | delete | post | patch | put

// login
router.route("/login").post(login);
// register
router.route("/register").post(register);
// logout
// router.route("/logout").delete(authenticateUser, logout);
router.route("/logout").delete(logout);
// user
router.route("/user").get(authenticateUser, currentUser);
// verify email
router.route("/verify/:verification_code").get(verifyEmail);
// verfiy-password-reset-code
router.route("/forgot-password").post(forgotPassword);
// reset-password
router.route("/reset-password").post(resetPassword);
// change-password
router.route("/change-password").post(authenticateUser, changePassword);

module.exports = router;
