const nodemailer = require("nodemailer");

module.exports = ({req,html,subject}) => {
  const transport = nodemailer.createTransport({
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  transport.sendMail({
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject,
    html,
  });
};
