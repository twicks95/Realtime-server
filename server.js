require("dotenv/config");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { socketConnection } = require("./handler/socketHandler");

const port = process.env.PORT;

// enable cors
app.use(cors({ origin: "*" }));

const server = http.createServer(app).listen(port, () => {
   console.log("Server connect to port " + port);
});

// enable socket
socketConnection(server);
