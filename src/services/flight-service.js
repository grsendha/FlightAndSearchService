const { FlightRepository, AirplaneRepository } = require('../repository/index')
const { compareTime } = require('../utils/helper')
class FlightService {

  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.departureTime, data.arrivalTime)) {
        throw { error: 'Arrival time cannot be less than departure' }
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity
      })
      return airplane;
    } catch (error) {
      console.log('something went wrong in flight service', error)
      throw error;
    }
  }

  async getFlightData() {

  }
}

module.exports = FlightService;

