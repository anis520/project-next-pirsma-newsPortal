import nodemailer from "nodemailer";
export const sendOtp = async (to, subject, code) => {
  try {
    let transort = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.SEND_MAIL_USER,
        pass: process.env.SEND_MAIL_PASS,
      },
    });

    transort.sendMail({
      from: `newsPortal${process.env.SEND_MAIL_USER}>`,
      to,
      subject,
      html: `<p style=" padding:5px;margin:0 10px;font-size:18px">your otp is <span style="color:white;background:blue;padding:5px;margin:0 10px;font-size:25px"> ${code}</span></p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
