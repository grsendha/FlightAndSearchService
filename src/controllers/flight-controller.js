const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const data = req.body
    const flight = await flightService.createFlight(data)
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: null,
    });
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      data: '',
      success: false,
      message: "Not able to create flight",
      err: error,
    });
  }
}

module.exports = {
  create,
}

