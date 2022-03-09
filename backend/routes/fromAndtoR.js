const express = require("express");
const { fromAndTo } = require("../controllers/fromAndTo");
// const { to } = require("../controllers/fromAndTo");
const fromAndToFilterRouter = express.Router();
// main route is /filter
fromAndToFilterRouter.get("/", fromAndTo);
// fromAndToFilterRouter.get("/to", to);

module.exports = { fromAndToFilterRouter };
