const express = require("express");
const router = express.Router();

// const keys = require("../../config/keys");
//Test

//Load menu validation
const validateMenuUpdateInput = require("../../validation/updatemenu");

//Load models
const MenuItem = require("../../models/MenuItem");

// router.get("/", (req, res) => res.json({ msg: "MenuItems Work" }));

router.post("/update", (req, res) => {
  MenuItem.findOne({ productid: req.body.productid }).then(item => {
    if (item) {
      errors.productid = "Product already exists";
      console.log("Product already added");
      console.log(item);
      return res.status(400).json(errors);
    } else {
      console.log("adding product");
      const newMenuItem = new MenuItem({
        productid: req.body.productid,
        category: req.body.category,
        comboname: req.body.comboname,
        price: req.body.price,
        description: req.body.description
      });
      console.log("updated");
      console.log(newMenuItem);
      console.log("updatednew");
      newMenuItem
        .save()
        .then(item => res.json(item)) //ASK ALEC
        .catch(err => console.log(err));
    }
    console.log("Yayyy");
  });
});

//@route    GET api/menuitems/all
//@desc     Get all User Profiles
//@access   Public

router.get("/", (req, res) => {
  MenuItem.find()
    .then(menuitem => {
      if (!menuitem) {
        errors.nomenuitem = "There is no item";
        return res.status(404).json(errors);
      }
      res.json(menuitem);
      console.log("Should be okay");
    })
    .catch(err => res.status(404).json({ menuitem: "There is no item" }));
});

module.exports = router;
