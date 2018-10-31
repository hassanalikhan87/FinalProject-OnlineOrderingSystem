const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const orders = require("./routes/api/orders");

const app = express();

//configurating database

const db = require("./config/keys").mongoURI;

//connect to MongoDB

mongoose
  .connect(db || "mongodb://localhost//orderlist")
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

//use routes
app.use("/api/users", users);
// app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", profile);
app.use("/api/orders", orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
