//first when we click join we it will send the user(who clicked join ) id

const db = require("../database/db");

const joinTripFunc = (req, res) => {
  const riderId = req.params.riderId;
  
};

module.exports = { joinTripFunc };
