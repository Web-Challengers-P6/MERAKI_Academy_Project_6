const db = require("../database/db");

const getAllInformation = (req, res) => {
  const userId = req.params.id;
  const query = `select Username ,email,Phone_number,profileImg from user where id=${userId}`;
  Connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      res.status(200).json({
        success: true,
        message: "All information for user",
        result: result,
      });
    }
  });
};
module.exports = getAllInformation;
//done
