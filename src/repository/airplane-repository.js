const { Airplane } = require('../models/index')

class AirplaneRepository {
  async getAirplane(id) {
    try {
      return Airplane.findByPk(id);
    } catch (error) {
      console.log('something went wrong in airplane repository', error)
      throw error;
    }
  }
}

module.exports = AirplaneRepository;

