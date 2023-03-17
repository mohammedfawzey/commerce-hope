const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//
const UserModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name required"],
    minLength: 3,
    maxLength: 100,
  },
  lastName: {
    type: String,
    required: [true, "last name required"],
    minLength: 3,
    maxLength: 100,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not supproted",
    },
    required: [true, "gender is required"],
  },
  phoneNumber: {
    type: String,
    // unique?
    required: [true, "phone number is requried"],
    match: [new RegExp(process.env.REGEX_PHONE_NUMBER), "Invalid phone number"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    index: { unique: true, dropDups: true },
    match: [new RegExp(process.env.REGEX_EMAIL), "Invalid Email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  active: {
    type: Boolean,
    default: false,
  },
  verification_code: {
    type: String,
    required: true,
    unique: true,
  },
  password_reset_code: {
    type: Number,
  },
  password_reset_code_verified: Boolean,
  //   schema for address
});

// pre change pass
UserModel.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// comparePassword
UserModel.methods.comparePassword = async function (credentialPassword) {
  return await bcrypt.compare(credentialPassword, this.password);
};
module.exports = mongoose.model("User", UserModel);
