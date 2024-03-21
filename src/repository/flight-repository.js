const { Flights } = require("../models");
const { Op, where } = require("sequelize");

class FlightRepository {
  /**
   * This method creates a filter object for flights.
   * @param {Object} filter - The filter object.
   * @returns {Object} - The created filter object.
   */
  #createFilter(data) {
    let filter = {};
    // Add filter conditions here
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }
    if (data.minPrice) {
      Object.assign(filter, {
        price: {
          [Op.gte]: data.minPrice,
        },
      });
    }

    if (data.maxPrice) {
      Object.assign(filter, {
        price: {
          [Op.lte]: data.maxPrice,
        },
      });
    }
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository", error);
      throw error;
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository", error);
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      /*
      this is inside flightObject
        where:{
          arrivalAirportId:2,
          departureAirportId:4,
          price:{
            [Op.gte]: 1000
          }
        }
      */
      const flightObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: flightObject,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in flight repository", error);
      throw error;
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      console.log("REPO", flight);
      return true;
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }
}

module.exports = FlightRepository;
