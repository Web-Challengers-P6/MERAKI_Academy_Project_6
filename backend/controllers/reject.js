const db = require("../database/db");
const connection = require("../database/db");
const reject = (req, res) => {
  //   console.log("wwwwwwwwwwwwwwwwwwwwwwww", maxNumberOfSeats);
  const tripId = req.params.tripId;
  let seats = req.body.seats;
  // if (tripId && riderId) {
  // numberOfSeats += 1;&& numberOfSeats <= maxNumberOfSeats

  const query = `update trip set passengers=${seats} where id=${tripId}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "did not remove" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "removed successfully",
        result: result,
        tripId: tripId,
        // seats: numbersite,
        passengers: seats,
        // id: id,
      });
    }
  });
};
const hideCard = (req, res) => {
  const tripId = req.params.tripId;
  const query=`update `
};
module.exports = { reject };
