const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const login = require("../database/mysql.js");
const submitLevel = require("../database/mysql.js");
<<<<<<< HEAD
const submitReading = require("../database/mysql.js");

=======
const carbLevel = require("../database/mysql.js");
>>>>>>> graph
const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept"
  );
  next();
});

<<<<<<< HEAD
app.post("/submitLevel", function(req, res) {
=======


app.post('/submitLevel', function(req, res) {
>>>>>>> graph
  let when_mesuare = req.body.whenMesuare;
  let glucose = req.body.Glucose;
  var created = new Date();
  if (!when_mesuare || !glucose) {
    res.sendStatus(400);
  } else {
<<<<<<< HEAD
    submitLevel.insertGlucose(
      when_mesuare,
      glucose,
      created,
      (err, results) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.status(200).json(results);
          console.log("server");
        }
=======
    submitLevel.insertGlucose(when_mesuare, glucose, created, (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);

      } else {
        res.status(200).json(results);
        console.log("server");
>>>>>>> graph
      }
    );
  }
<<<<<<< HEAD
});
=======
 });

 app.post('/carbLevel', function(req, res) {
   console.log(req.body);
   let amount_mesuare= req.body.amountMesuare;
   let carbs = req.body.Carbs;
   var carbs_time = new Date();
   if (!amount_mesuare || !carbs) {
     res.sendStatus(400);
     console.log(amount_mesuare);
     console.log(carbs);
     console.log(carbs_time);
   } else {
     carbLevel.insertCarbs(amount_mesuare, carbs, carbs_time, (err, results) => {
       if (err){
         console.log(err);
         res.sendStatus(500);
       } else {
         res.status(200).json(results);
         console.log("server");
       }
     });
   }
 });


>>>>>>> graph

app.post("/bloodPresure", function(req, res) {
  console.log(res.body);
  var when_reading = req.body.whenReading;
  var bloodPresure = req.body.bloodPresure;
  var created = new Date();
  if (!when_reading || !bloodPresure) {
    res.sendStatus(400);
  } else {
    submitReading.insertBloodPressure(
      when_reading,
      bloodPresure,
      created,
      (err, results) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200).json(results);
        }
      }
    );
  }
});

var router = express.Router();

// test route
router.get("/carbs", function(req, res){
  res.json({ message: "welcome to our server"})
});
router.get("/glucose", function(req, res) {
  res.json({ message: "welcome to our server" });
});
//router.get("/bloodPresure", function(req, res) {
//res.json({ message: "this is the blood pressure reading" });
//});
//router to our handle user registration
router.post("/register", login.userRegister);
router.post("/login", login.userLogin);
app.use("/api", router);
app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
