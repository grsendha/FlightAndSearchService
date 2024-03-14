const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong ");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong ");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong ");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = this.cityRepository.getCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong ");
      throw { error };
    }
  }
}