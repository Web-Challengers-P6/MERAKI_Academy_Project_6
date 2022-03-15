const express = require("express");
const { fromAndTo } = require("../controllers/fromAndTo");
// const { to } = require("../controllers/fromAndTo");
const fromAndToFilterRouter = express.Router();
// main route is /filter
fromAndToFilterRouter.post("/", fromAndTo);
// fromAndToFilterRouter.get("/to", to);

module.exports = { fromAndToFilterRouter };
