const express = require("express");
const from = require("../controllers/fromAndTo");
const to = require("../controllers/fromAndTo");
const fromAndToFilterRouter = express.Router();

fromAndToFilterRouter.get("/from", fromPoint);
fromAndToFilterRouter.get("to", to);
