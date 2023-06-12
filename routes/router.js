const router = require("express").Router();

// Services Router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// Parties Routes
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
