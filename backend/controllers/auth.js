const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  NotFoundError,
  UnAuthenticatedError,
  BadRequestError,
} = require("../errors");
const {
  attachCookiesToResponse,
  showAllExceptPassword,
  keyGenerator,
  sendEmail,
  passwordResetCodeGenerator,
  createToken,
} = require("../utils");

//create email with active=false
const register = async (req, res) => {
  // check if already loggedIn
  const token = req.signedCookies.token;
  if (token) {
    throw new BadRequestError("Already loggedIn!!!");
  }
  //
  req.body = { ...req.body, verification_code: keyGenerator() };
  const user = await User.create(req.body);
  try {
    //
    const subject = "Please confirm your account";
    const html = `<h1>Email Verification</h1>
    <h2>Hello ${req.body.firstName}</h2>
    <p>Thank you for subscribing. Please verifiy you email by clicking on following link</p>
    <a href=http://localhost:8080/api/v1/auth/verify/${req.body.verification_code}>click here</a>`;
    sendEmail({ req, html, subject });
    res.status(StatusCodes.CREATED).json({ user_registered: true, user });
  } catch (err) {
    user.delete();
    throw new BadRequestError(
      "Something went wrong please try again later" + err.message
    );
  }
  //
};

const login = async (req, res) => {
  // check if already loggedIn
  const accessToken = req.signedCookies.token;
  if (accessToken) {
    throw new BadRequestError("Already loggedIn!!!");
  }
  // check if email | password exist
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  // find user by email
  const filter = { email };
  const user = await User.findOne(filter);
  if (!user) {
    throw new NotFoundError(`no user found with email ${email}`);
  }
  // check if account verified
  if (!user.active) {
    throw new UnAuthenticatedError("Email not verified");
  }
  // comparePassword
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Password");
  }
  // all good
  const token = createToken({ user });
  attachCookiesToResponse({ user, res });
  //
  res.status(StatusCodes.OK).json({
    user_loggedIn: true,
    user: showAllExceptPassword({ user }),
    token,
  });
};

// @desc remove token from cookie and set to logout
// @route /logout
// @access user with login
const logout = (req, res) => {
  res.cookie("token", "logout", {
    maxAge: 0,
    signed: true,
    httpOnly: true,
  });
  res.status(StatusCodes.OK).json({ user_loggedOut: true });
};

// @desc show only the user the provide token in cookie
// @route /me
// @access just only user with his token
const currentUser = async (req, res) => {
  // console.log("backend ### current user");
  const filter = { _id: req.user.id };
  const user = await User.findOne(filter).select("-password");
  if (!user) {
    throw new NotFoundError(`no user fond with id ${req.user.id}`);
  }
  res.status(StatusCodes.OK).json({ show_current_user: true, user });
};

const verifyEmail = async (req, res) => {
  // check if logged in
  const token = req.signedCookies.token;
  if (token) {
    throw new BadRequestError("you already loggedIn!!!");
  }
  const filter = { verification_code: req.params.verification_code };
  const user = await User.findOne(filter);
  if (!user) {
    throw new BadRequestError("Invalid verification code");
  }
  // if (user.active) {
  //   throw new BadRequestError("Email Already Verified!!!");
  // }
  user.active = true;
  await user.save();
  // active account now
  attachCookiesToResponse({ user, res });
  res.status(StatusCodes.OK).json({ user_email_activated: true, user });
};
// @req email
const forgotPassword = async (req, res) => {
  // check if already loggedIn
  const { email } = req.body;
  const token = req.signedCookies.token;
  if (token) {
    throw new BadRequestError("you already loggedIn!!!");
  }
  if (!email) {
    throw new BadRequestError("please provide email");
  }
  // check if there is email
  const filter = { email: req.body.email };
  const user = await User.findOne(filter);
  if (!user) {
    throw new NotFoundError(`no user found with email ${req.body.email}`);
  }
  try {
    const password_reset_code = passwordResetCodeGenerator();
    // send password reset code to verify
    const subject = "Password Reset Code";
    const html = `<h1>Password Reset Code</h1>
  <p>Thank you for subscribing. Please verfiy reset code</p>
  <a href=http://localhost:8080/api/v1/auth/verify-password-reset-code/${password_reset_code}>verify password reset code</a>
  <p>${password_reset_code}</p>`;
    sendEmail({ req, html, subject });
    user.password_reset_code = password_reset_code;
    await user.save();
  } catch (err) {
    user.password_reset_code = null;
    await user.save();
    // user.password_reset_code = null;
    throw new BadRequestError(
      "Something went wrong please try again later" + err.message
    );
  }
};
const verifyPasswordResetCode = async (req, res) => {
  const filter = { password_reset_code: req.params.password_reset_code };
  const user = await User.findOne(filter);
  console.log(user);
  if (!user) {
    throw new BadRequestError("Invalid password reset code");
  }
  //
  user.password_reset_code_verified = true;
  await user.save();
  res
    .status(StatusCodes.OK)
    .json({ password_reset_code_verified: true, msg: "user can reset code" });
};

// @req password_reset_code, email, password_reset_code_verified=true
const resetPassword = async (req, res) => {
  // check if not loggedIn
  if (req.signedCookies.token) {
    throw new BadRequestError("you are loggedIn!!!");
  }
  const { email, password_reset_code, new_password, confirm_password } =
    req.body;
  if (!email) {
    throw new BadRequestError("email must be provided");
  }

  //check if email exist
  const filter = { email };
  const user = await User.findOne(filter);
  if (!user) {
    throw new NotFoundError(`no user with email ${email}`);
  }
  // &&
  // user.password_reset_code_verified === true
  if (Number(user.password_reset_code) === Number(password_reset_code)) {
    // all good
    if (!new_password || !confirm_password) {
      throw new BadRequestError(
        "please provide new password and confirm password"
      );
    }
    if (new_password !== confirm_password) {
      throw new BadRequestError("invalid confirm password");
    }
    user.password = new_password;
    // user.password_reset_code_verified = false;
    await user.save();
    attachCookiesToResponse({ user, res });
    res
      .status(StatusCodes.OK)
      .json({ password_changed: true, user: showAllExceptPassword({ user }) });
  } else {
    //
    throw new BadRequestError("invalid password reset code");
  }
};

// @req (userLoggedIn) || currentPassword && new_password && confirm_password
const changePassword = async (req, res) => {
  const { current_password, new_password, confirm_password } = req.body;
  const filter = { _id: req.user.id };
  const user = await User.findOne(filter);
  if (!user) {
    throw new NotFoundError(`no user found with id ${req.user.id}`);
  }
  if (!current_password || !new_password || !confirm_password) {
    throw new BadRequestError(
      "please provide current_password,new_password,confirm_password"
    );
  }
  // check if current password is correct
  const isPasswordCorrect = await user.comparePassword(current_password);
  if (!isPasswordCorrect) {
    throw new BadRequestError("Invalid current password");
  }
  if (new_password !== confirm_password) {
    throw new BadRequestError("invalid confirm password");
  }
  // all good
  user.password = new_password;
  await user.save();
  res
    .status(StatusCodes.OK)
    .json({ password_changed: true, user: showAllExceptPassword({ user }) });
};
module.exports = {
  login,
  register,
  logout,
  currentUser,
  verifyEmail,
  forgotPassword,
  verifyPasswordResetCode,
  resetPassword,
  changePassword,
};
