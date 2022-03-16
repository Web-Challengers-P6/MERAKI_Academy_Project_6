const connection = require("../database/db");
const db = require("../database/db");

const acceptrequest = (req, res) => {
  let numOfSeats = 0;
  const id = req.params.id;
  const query = `update trip set numbersite=${(numOfSeats += 1)} where id=?  `;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "internal server error",
        result: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: " softDelete =1",
        numOfSeats: numOfSeats + 1,
        result: result,
      });
    }
  });
};
module.exports = acceptrequest;
