var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chirukosanam123@gmail.com',
    pass: 'xxhrvvaakgwryfzi'
  }
});

var mailOptions = {
  from: 'chirukosanam123@gmail.com',
  to: 'chiranjeevikosanam3@gmail.com',
  subject: 'Sending Mail Verification',
  text: 'Hi, How r u',
  html: '<h1>Welcome</h1><p>Your verification is successfully completed.</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});