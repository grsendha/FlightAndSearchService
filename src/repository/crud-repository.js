class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log("data repo: ", data);
      const result = await this.model.create(data);
      console.log('result: ', result);
      return result;
    } catch (error) {
      console.error('Error in create method:', error);
      throw error;
    }
  }

  async destroy(modelId) {
    try {
      await this.model.destroy({ where: { id: modelId } })
    } catch (error) {
      throw error
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll()
      return result;
    } catch (error) {
      throw error
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, { where: { id: modelId } })
      return result;
    } catch (error) {
      throw error
    }
  }

}

module.exports = CrudRepository;