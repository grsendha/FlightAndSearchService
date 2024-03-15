const validateCreatelFlight = async (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "All fields are required",
      error: 'Mandatory fileds missing'
    })
  }
  next();
}

module.exports = validateCreatelFlight;