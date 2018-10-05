const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const login = require("../database/mysql.js");
const submitLevel = require("../database/mysql.js");
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


app.post('/submitLevel', function(req, res) {
  let when_mesuare = req.body.whenMesuare;
  let glucose = req.body.Glucose;
  var created = new Date();
  if (!when_mesuare || !glucose) {
    res.sendStatus(400);
    console.log(when_mesuare);
    console.log(glucose);
    console.log(created);
  } else {
    submitLevel.insertGlucose(when_mesuare, glucose, created, (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        
      } else {
        res.status(200).json(results);
        console.log("server");
      }
    });
  }
 });




var router = express.Router();

//test route
router.get("/glucose", function(req, res) {
  res.json({ message: "welcome to our server" });
});

//router to our handle user registration
router.post("/register", login.userRegister);
router.post("/login", login.userLogin);
app.use("/api", router);
app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
