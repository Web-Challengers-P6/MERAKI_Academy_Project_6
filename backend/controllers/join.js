//first when we click join we it will send the user(who clicked join ) id

const connection = require("../database/db");
const db = require("../database/db");

const joinTripFunc = (req, res) => {
  const tripId = req.params.tripId;
  const riderId = req.body.riderId;

  const passengers = [];
  passengers.push(riderId);
  console.log(passengers);
  const query = `insert into rider riderid=${riderId} where tripid=${tripId} `;
  connection.query(query,(err,result)=>{

if (err) {
    console.log(err);

}

  })
};

module.exports = { joinTripFunc };
