const connection = require("../database/db");
const db = require("../database/db");

const acceptrequest = (req, res) => {
  const id = req.params.id;
  const query = `update trip set acceptrequest=1 where id=?  `;
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
      res
        .status(200)
        .json({ success: true, message: " acceptrequest =1", result: result });
    }
  });
};
module.exports = acceptrequest;
