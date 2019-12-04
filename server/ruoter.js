const express = require("express");
const router = express.Router();
var mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN
});

router.get("/", (req, res) => {
  res.send("ser is up and runn");
});

// create a POST route
router.post("/", (req, res) => {
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

module.exports = router;
