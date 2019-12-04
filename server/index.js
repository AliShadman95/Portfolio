const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

var mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

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
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
