const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.departureTime, data.arrivalTime)) {
        throw { error: "Arrival time cannot be less than departure" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service", error);
      throw error;
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("something went wrong in flight service", error);
      throw error;
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service", error);
      throw error;
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await this.flightRepository.updateFlight(flightId, data);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service", error);
      throw error;
    }
  }
}

module.exports = FlightService;
