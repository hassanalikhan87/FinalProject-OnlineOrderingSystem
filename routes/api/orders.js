const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Models
// const User = require("../../models/User");

// const MenuItem = require("../../models/MenuItem");

const Order = require("../../models/Order");

router.post("/", (req, res) => {
  const orderUser = req.body.userId; // User ID from front end.
  const menuItems = req.body.items; // Array of IDs of menu items from front end.
  console.log("hashim ---------------------> ");
  menuItems.map(item => console.log(item));

  Order.create({ user: orderUser, menuitems: menuItems }, (err, order) => {
    if (err) {
      res.send(err);
    }
    // console.log(Order);
    res.json(order);
  });
});

// Returns the entire list of items from database (probably should be gaurded for restraunts only/etc and include filters)
router.get("/", (req, res) => {
  Order.find({})
    .populate("user", "menuitems")
    .exec((err, order) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      // console.log(order[0].users.name);
      // console.log(order[0].users.phoneNumber);
      // console.log(order[0].menuItems[0].name);
      res.json(order);
    });
});

module.exports = router;
