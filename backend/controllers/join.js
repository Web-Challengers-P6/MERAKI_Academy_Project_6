//first when we click join we it will send the user(who clicked join ) id

const connection = require("../database/db");
const db = require("../database/db");
let maxNumberOfSeats = require("../controllers/Trip");
let numberOfSeats = 0;
// numberOfSeats = 0;
const joinTripFunc = (req, res) => {
  console.log("wwwwwwwwwwwwwwwwwwwwwwww", maxNumberOfSeats);
  const tripId = req.params.tripId;
  const riderId = req.body.riderId;
  // if (tripId && riderId) {
  // numberOfSeats += 1;&& numberOfSeats <= maxNumberOfSeats
  const passengers = [];
  passengers.push(riderId);
  //   console.log(passengers);
  const query = `update trip set passengers=${numberOfSeats} where id=${tripId}`;
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
        // seats: numbersite,
        passengers: numberOfSeats,
        // id: id,
      });
    }
  });
  // } else {
  // console.log("nooooooooooonoooooooooooWAYYYYYYYYYY");
  // res
  //   .status(500)
  //   .json({ success: false, message: " sorry the seats are full" });
  // }
};
const update = (req, res) => {
  const id = req.params.id;
  let seats = req.body.seats;
  const query = `update trip set numberOfSeats=${seats} where id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "did not join" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "joined successfully(seat is reserved)",
        result: result,
        any: numberOfSeats,
      });
    }
  });
};
module.exports = { joinTripFunc, update };
//use something like the useState for the back end sp when the trip changes it will reset each time but when you join trip a then trip b then trip a the counter for trip a will be reassigned to 0
