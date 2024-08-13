require("dotenv").config();
const nodemailer = require("nodemailer");

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    this.email = process.env.SMTP_USER;
  }

  async Send(to, subject, text, html) {
    console.log("➜ ".green, "Enviando email".grey);
    this.transporter
      .sendMail({
        from: "Mayarog " + "<" + this.email + ">",
        to,
        subject,
        text,
        html,
      })
      .then((res) => {
        console.log("  ✔ ".green, "Email enviado: ".grey, res);
      })
      .catch((err) => {
        console.log("  ✖ ".red, "Email erro: ", err);
      });
  }
}

module.exports = Mailer;
