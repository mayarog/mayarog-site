require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendUnsubMail = require("../src/mail/NewsletterUnsubMailer.js");
const path = require("path");

const vue_app_host = `https://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`;

const app = express();
app.use(cors({ origin: [vue_app_host] }));
const port = process.env.API_PORT;

app.use((req, res, next) => {
  if (req.headers.host.split(':')[1] == port) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
});

app.get("/api/newsletter/unsubscribe/mailer/:email", async (req, res) => {
  console.log(req.params.email);
  if (!req.params.email) {
    res.status(422).send();
  }
  await sendUnsubMail(req.params.email);
  res.send("Ok");
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Secondary server running at http://localhost:${port}`);
});
