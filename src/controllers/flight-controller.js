const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const data = req.body;
    let flightRequestData = {
      flightNumber: data.flightNumber,
      airplaneId: data.airplaneId,
      departureAirportId: data.departureAirportId,
      arrivalAirportId: data.arrivalAirportId,
      departureTime: data.departureTime,
      arrivalTime: data.arrivalTime,
      price: data.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: null,
    });
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to create flight",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "All flights fetched successfully",
      err: null,
    });
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to get all flights",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "All flights fetched successfully",
      err: null,
    });
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to get all flights",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "flight update successfully",
      err: null,
    });
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to update flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
