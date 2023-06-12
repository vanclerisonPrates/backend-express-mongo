const { Service: ServiceModel } = require("../models/service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();

      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(400).json({ msg: "Serviço não encontrado" });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(400).json({ msg: "Serviço não encontrado" });
        return;
      }

      const deleteService = await ServiceModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deleteService, msg: "Serviço excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const udatedService = await ServiceModel.findByIdAndUpdate(id, service);

      if (!udatedService) {
        res.status(400).json({ msg: "Serviço não encontrado" });
        return;
      }

      res.status(200).json({ service, msg: "Serviço atualizado com sucesso." });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
