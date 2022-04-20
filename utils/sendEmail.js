const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'gmail',
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: 'chirukosanam123@gmail.com',
                pass: 'xxhrvvaakgwryfzi',
            },
        });

        await transporter.sendMail({
            from: 'chirukosanam123@gmail.com',
            to: 'chiranjeevikosanam3@gmail.com',
            subject: 'Hi....',
            text: 'Hello...........',
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};


module.exports = sendEmail;
