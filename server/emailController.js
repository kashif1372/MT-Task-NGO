const expressAsyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'enid.toy71@ethereal.email',
      pass: 'uSqHPH5Qrjetu8RBg9'
  }
});
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    var mailOptions = {
      from: "harrypotter.com",
      to: email,
      subject: "Email from " + name,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully");
        }
    });

});

module.exports = { sendEmail };
