const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const menuitems = require("./routes/api/menuitems");
const orders = require("./routes/api/orders");

const app = express();

//Bringing in body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log("KUTTI");
//configurating database
// const db = process.env.MongoURI || "mongodb://localhost/royalkebab_db";
const db = require("./config/keys").mongoURI;
//connect to MongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

// app.get("/", (req, res) => res.send("Hello World!"));

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/menuitems", menuitems);
app.use("/api/orders", orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
