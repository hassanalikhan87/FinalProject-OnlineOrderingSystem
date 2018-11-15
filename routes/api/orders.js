const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Models
const User = require("../../models/User");

const MenuItem = require("../../models/MenuItem");

router.get("/test", (req, res) => res.json({ msg: "Orders Work" }));

module.exports = router;
