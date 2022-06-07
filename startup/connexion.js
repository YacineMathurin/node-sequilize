var mysql = require("mysql");
const { dbconfig } = require("./db.config");

module.exports = function () {
  var con = mysql.createConnection(dbconfig);

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB !");
  });
};
