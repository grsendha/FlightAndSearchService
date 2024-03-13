const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      return City.create({ name });
    } catch (error) {
      throw {
        error: error.message,
      };
    }
  }

  async deleteCity({ id }) {
    try {
      return City.destroy({ where: { id } });
    } catch (error) {
      throw {
        error: error.message,
      };
    }
  }
}

module.exports = CityRepository;
