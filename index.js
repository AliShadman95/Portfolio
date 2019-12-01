const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

var mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// create a POST route
app.post("/express_backend", (req, res) => {
  console.log(req.body.email);

  var data = {
    from: req.body.email,
    to: "alishadman955@gmail.com",
    subject: req.body.subject,
    text: req.body.message
  };

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });

  /* 
  let testAccount = nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    service: "gmail", // no need to set host or port etc.
    auth: {
      user: "alishadman955@gmail.com",
      pass: "a1"
    }
  });
  var message = {
    from: "test@gmail.com",
    to: "alishadman955@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    }
  }); */
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
