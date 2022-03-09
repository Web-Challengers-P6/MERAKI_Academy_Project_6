const express = require("express");
const { from } = require("../controllers/fromAndTo");
const { to } = require("../controllers/fromAndTo");
const fromAndToFilterRouter = express.Router();

fromAndToFilterRouter.get("/from", from);
fromAndToFilterRouter.get("to", to);

module.exports = { fromAndToFilterRouter };
