const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.cityId);
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Airport created successfully",
      error: null
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
}

module.exports = {
  create
}