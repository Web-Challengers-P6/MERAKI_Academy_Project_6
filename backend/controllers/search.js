
const connection = require("../database/db");
const db = require("../database/db");

const search = (req, res) => {
  const tripName = req.params.tripName;
  const query = `select * from trip where tripName =${'"' + tripName + '"'}`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(404).json({ success: false, message: "No result", err });
    } else if (result) {
      res
        .status(200)
        .json({ success: true, message: "All results", result: result });
    }
  });
};
module.exports = search;
