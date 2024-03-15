const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require('./routes/index')

async function setupAndStartServer() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api', ApiRoutes);

  app.listen(4230, () => {
    console.log(`Server is running on port ${PORT}`);
    // const repo = new CityRepository();
    // repo.createCity({ name: "Cuttack" });
  });
}

setupAndStartServer();
