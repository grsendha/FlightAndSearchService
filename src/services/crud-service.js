class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      console.log('data: ', data);
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      await this.repository.destroy(id);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.repository.update(id, data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudService;