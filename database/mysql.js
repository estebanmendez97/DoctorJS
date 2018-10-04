// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

//change database credentials as needed
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "doctorJS"
});
connection.connect(function(err) {
  if (!err) {
    console.log("Database is is connected...nn");
  } else {
    console.log("Error connecting database....nn");
  }
});

const userRegister = function(req, res) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      var today = new Date();
      var users = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,
        created: today,
        modified: today
      };
      connection.query("INSERT INTO users SET ?", users, function(
        error,
        results,
        fields
      ) {
        if (error) {
          console.log("ERROR OCURRED", error);
          res.send({
            code: 400,
            failed: "error ocurred"
          });
        } else {
          console.log("THE SOLUTION IS: ", results);
          res.send({
            code: 200,
            sucess: "user registered sucessfully"
          });
        }
      });
    });
  });
  //console.log("req", req.body);
};

const userLogin = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM users WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log("ERROR OCCURED", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log("The Solution is: ", results);
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, bcryptRes) {
          if (!bcryptRes) {
            res.send({
              code: 400,
              success: " Email and passord do not match"
            });
          } else {
            console.log("what is res res ", res);
            res.send({
              code: 200,
              success: "login sucessful"
            });
          }
          // res == true
        });
      }
    }
  });
};
const insertGlucose = function(when_mesuare, glucose, created, callback) {
  connection.query(
    "INSERT INTO glucose (when_mesuare, glucose, created) VALUES (?, ?, ?)",
    [when_mesuare, glucose, created],
    (err, results, fields) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(results);
        callback(null, results);
      }
    }
  );
};

module.exports.userRegister = userRegister;
module.exports.userLogin = userLogin;
module.exports.insertGlucose = insertGlucose;
