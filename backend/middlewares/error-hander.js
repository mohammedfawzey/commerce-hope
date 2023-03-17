const { StatusCodes } = require("http-status-codes");
module.exports = (err, req, res, next) => {
  let customError = {
    status: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong please try again later",
  };
  res.status(customError.status).json({ msg: customError.msg, err });
};
