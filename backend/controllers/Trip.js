const connection = require("../database/db");

const getAllTrip = (req, res) => {
  const query = `SELECT * FROM trip WHERE softDelete=0`;
  connection.query(query, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    }
    res.status(200).json({
      success: true,
      massage: "All the trip",
      results: result,
    });
  });
};
let maxNumberOfSeats = 0;
const creatNewTrip = (req, res) => {
  const {
    tripName,
    TRIPfrom,
    TRIPto,
    Image,
    Price,
    numberOfSeats,
    passengers,
    Datetrip,
    Timetrip,
  } = req.body;
  const driverId = req.token.userId;

  const query = `INSERT INTO trip (tripName,TRIPfrom,TRIPto,Price,numberOfSeats,passengers,driverId,Datetrip,Timetrip) VALUES (?,?,?,?,?,?,?,?,?);`;
  const data = [
    tripName,
    TRIPfrom,
    TRIPto,
    Price,
    numberOfSeats,
    passengers,
    driverId,
    Datetrip,
    Timetrip,
  ];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error ",
        err: err,
      });
    } else {
      res.status(200).json({
        success: true,
        massage: "Success Trip created",
        results: result,
      });
    }
  });
};
const updateTrip = (req, res) => {
  const {
    tripName,
    TRIPfrom,
    TRIPto,
    Image,
    Price,
    numbersite,
    Datetrip,
    Timetrip,
  } = req.body;

  const query = `UPDATE trip SET tripName=?,TRIPfrom=?,TRIPto=?,Price=?,numbersite=?,Datetrip=?, Timetrip=? WHERE id=?; `;
  //Image=?,
  const data = [
    tripName,
    TRIPfrom,
    TRIPto,
    Image,
    Price,
    numbersite,
    Datetrip,
    Timetrip,
  ];

  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "did not update the trip`s information ",
        result: result,
      });
    } else {
      console.log("updated ");
      console.log(result);
      res.status(200).json({
        success: true,
        message: "trip`s information were successfuly updated ",
      });
    }
  });
};
const deleteTrip = (req, res) => {
  const tripId = req.body.tripId;
  const query = `delete from trip where id=${tripId};`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        success: false,
        message: "something went wrong while deleting this trip",
      });
    } else {
      console.log(result);
      res.status(200).json({ success: true, message: "trip was deleted" });
    }
  });
};

const allTripsForTheDriver = (req, res) => {
  const userId = req.params.userId;
  const query = `select * from trip where driverId =${userId}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "did not find trips for the user" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "all trips were found ",
        result: result,
      });
    }
  });
};
module.exports = {
  creatNewTrip,
  getAllTrip,
  updateTrip,
  deleteTrip,
  allTripsForTheDriver,
  maxNumberOfSeats,
};
