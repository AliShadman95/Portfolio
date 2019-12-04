const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");
var http = require("http");

const server = http.createServer(app);

var mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

app.get("/", (req, res) => {
  res.send("get sended");
});

// create a POST route
app.post("/", (req, res) => {
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
server.listen(port, () => console.log(`Listening on port ${port}`));
