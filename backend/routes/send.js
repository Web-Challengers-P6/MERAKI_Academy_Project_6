const express = require("express");
const {send}=require("../controllers/email")
const sendrouter= express.Router();
sendrouter.post=("/:email",send)
module.exports = { sendrouter };

