const express = require("express");
const router = express.Router();
const {
  CityController,
  FlightController,
  AirportController,
} = require("../../controllers/index");
const { FlightMiddleware } = require("../../middlewares/index");

/* ----------------------------- CityController ----------------------------- */
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
/* -------------------------------------------------------------------------- */

/* ---------------------------- FlightController ---------------------------- */
router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
/* -------------------------------------------------------------------------- */

/* ---------------------------- AirportController --------------------------- */
router.post("/airports", AirportController.create);
/* -------------------------------------------------------------------------- */

module.exports = router;
