import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shahzaibalijamro@gmail.com",
      pass: "padh damb rpit rxwd",
    },
  });

  // 2. Define the email options
  const mailOptions = {
    from: "Auth System <auth@example.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: options.html (you can add HTML version too)
  };

  // 3. Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;