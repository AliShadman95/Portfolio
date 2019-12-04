const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");
var http = require("http");
const router = require("./router");

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

app.use(router);

// console.log that your server is up and running
server.listen(port, () => console.log(`Listening on port ${port}`));
