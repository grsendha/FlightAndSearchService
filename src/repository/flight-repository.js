const { Flights } = require('../models')

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data)
      return flight
    } catch (error) {
      console.log('something went wrong in flight repository', error)
      throw error;
    }
  }
}

module.exports = FlightRepository;
