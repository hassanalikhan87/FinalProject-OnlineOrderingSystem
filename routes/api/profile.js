const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load User Model
const User = require("../../models/User");

//@route    GET api/profile/test
//@desc     Test profile route
//@access   Public

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

//@route    GET api/profile
//@desc     Get current User Profile
//@access   Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    errors.nouser = "There is no profile for this user";
    User.findOne({ _id: req.user.id })
      .then(user => {
        console.log("///////////////////////////////////////////////////");
        console.log(req.user);
        console.log("///////////////////////////////////////////////////");
        if (!user) {
          return res.status(404).json(errors);
        }
        res.json(user);
      })
      .catch(err => res.status(404).json(err));
  }
);

//@route    GET api/profile/all
//@desc     Get all User Profiles
//@access   Public

router.get("/all", (req, res) => {
  User.find()
    // .populate("user", ["name", "username", "phoneNumber"])
    .then(users => {
      if (!users) {
        errors.nousers = "There is no user";
        return res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err => res.status(404).json({ user: "There is no user" }));
});

router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then(users => {
      if (!users) {
        errors.nousers = "There is no user";
        return res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err => res.status(404).json({ user: "There is no user" }));
});

module.exports = router;
