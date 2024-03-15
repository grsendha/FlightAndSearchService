const express = require('express');
const router = express.Router();
const { CityController, FlightController } = require('../../controllers');


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/flights', FlightController.create);
// router.delete('/flight/:id', FlightController.destroy); 

module.exports = router;

