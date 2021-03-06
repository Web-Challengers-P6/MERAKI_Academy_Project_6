const connection = require("../database/db");
const db = require("../database/db");
const Connection = require("../database/db");
const getAllInformation = (req, res) => {
  const userId = req.params.userId;
  const query = `select Username ,email,Phone_number,profileImg from user where id=${userId}`;
  Connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "All information for user ",
        result: result,
      });
    }
  });
};
const editProfile = (req, res) => {
  const userId = req.params.userId;
  const {Username, email, Phone_number} = req.body;
  const query = `update user set Username=?,email=?,Phone_number=? where id=${userId};`;
  const data = [Username, email, Phone_number];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ success: false, message: "did not edit the information " });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "the information were successfuly edited",
        result: result,
      });
    }
  });
};

module.exports = { getAllInformation, editProfile };
//done
