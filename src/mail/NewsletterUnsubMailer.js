require("dotenv").config();
const Mailer = require("./Mailer");

class NewsletterUnsubMailer extends Mailer {
  constructor() {
    super();
    this.template = `
      <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmação de Desinscrição</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }
                h1 {
                    color: #333333;
                }
                p {
                    color: #666666;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Confirmação de Desinscrição</h1>
                <p>Admin,</p>
                <p>O usuário %EMAIL%, acabou de se desinscrever da newsletter.</p>
                <p>Horário da desinscrição: <strong>%DATE%</strong>.</p>
            </div>
        </body>
      </html>
        `;
    this.text = `
          O usuário %EMAIL%, acabou de se desinscrever da newsletter.
          Horário da desinscrição: %DATE%.
          www.mayarog.com
        `;
  }

  async send(from) {
    console.log("send to:", from);
    const dateNow = new Date()
      .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
      .replace(",", "");
    super.Send(
      process.env.SMTP_USER,
      "Mayarog - Desinscrição do newsletter",
      this.text.replace(/%EMAIL%/g, from),
      this.template.replace(/%EMAIL%/g, from).replace(/%DATE%/, dateNow)
    );
  }
}

async function sendUnsubMail(email) {
  const mailer = new NewsletterUnsubMailer();
  try {
    mailer.send(email);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = sendUnsubMail;
