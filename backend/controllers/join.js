//first when we click join we it will send the user(who clicked join ) id

const connection = require("../database/db");
const db = require("../database/db");
let numberOfSeats = 0;

const joinTripFunc = (req, res) => {
  const tripId = req.params.tripId;
  const riderId = req.body.riderId;
  if (tripId && riderId) {
    numberOfSeats += 1;
    const passengers = [];
    passengers.push(riderId);
    //   console.log(passengers);
    const query = `update trip set numbersite=${numberOfSeats} where id=${tripId}`;
    // const data = [tripId, riderId];
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "did not join" });
      } else {
        console.log(result, passengers);
        res.status(200).json({
          success: true,
          message: "joined successfully",
          result: result,
          tripId: tripId,
          passengers: numberOfSeats,
          // id: id,
        });
      }
    });
  } else {
    console.log("nooooooooooonoooooooooooWAYYYYYYYYYY");
  }
};

module.exports = { joinTripFunc };
