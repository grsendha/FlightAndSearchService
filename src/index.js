const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

async function setupAndStartServer() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setupAndStartServer();
