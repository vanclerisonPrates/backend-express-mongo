const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
const ServiceController = require("../controllers/serviceController");

//Funções
router
  .route("/services")
  .post((req, res) => serviceController.create(req, res));

router.route("/services").get((req, res) => ServiceController.getAll(req, res));

router
  .route("/services/:id")
  .get((req, res) => ServiceController.get(req, res));

router
  .route("/services/:id")
  .delete((req, res) => serviceController.delete(req, res));

router
  .route("/services/:id")
  .put((req, res) => ServiceController.update(req, res));

module.exports = router;
