const connection = require("../database/db");
const db = require("../database/db");

const triprequest = (req, res) => {
  const id = req.params.id;
  const query = `update trip set request=1 where id=?  `;
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
        .json({ success: true, message: "request =1", result: result });
    }
  });
};
module.exports = triprequest;