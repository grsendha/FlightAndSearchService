const { CityService } = require("../services/index");

const cityService = new CityService();

/* ---------------------------------- POST ---------------------------------- */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: null,
        });
    } catch (error) {
        console.log("something went wrong ", error);
        return res.status(500).json({
            data: '',
            success: false,
            message: "Not able to create city",
            err: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City Deleted successfully",
            err: null,
        });
    } catch (error) {
        console.log("something went wrong ", error);
        return res.status(500).json({
            data: '',
            success: false,
            message: "Not able to delete city",
            err: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City Fetched successfully",
            err: null,
        });
    } catch (error) {
        console.log("something went wrong ", error);
        return res.status(500).json({
            data: '',
            success: false,
            message: "Not able to get city",
            err: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City Updated successfully",
            err: null,
        });
    } catch (error) {
        console.log("something went wrong ", error);
        return res.status(500).json({
            data: '',
            success: false,
            message: "Not able to update city",
            err: error,
        });

    }
};

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "City Fetched successfully",
            err: null,
        });
    } catch (error) {
        return res.status(500).json({
            data: '',
            success: false,
            message: "Not able to Fetch all cities",
            err: error,
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
};
