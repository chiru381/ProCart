const nodemailer = require("nodemailer");

//using nodemailer
const sendEmail = async (email, subject, text, link, otp_code) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "gmail",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: "chirukosanam123@gmail.com",
        pass: "xxhrvvaakgwryfzi",
      },
    });

    await transporter.sendMail({
      from: "chirukosanam123@gmail.com",
      to: email,
      subject: "Hi....",
      text: "Hello...........",
      html: `<h1>Welcome</h1><p>Your verification is  successfully completed. ${link}, ${otp_code}.</p>`,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
