const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//User model
const User = require("../../models/User");

//@route    GET api/users/test
//@desc     Tests user route
//@access   Public

router.get("/test", (req, res) => res.json({ msg: "User Works" }));

//@route    GET api/users/register
//@desc     Register user
//@access   Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("register POST recieved");
  User.findOne({ username: req.body.username }).then(user => {
    // console.log(req.body);

    if (user) {
      errors.username = "Username already exists";
      console.log("User NF");
      console.log(user);
      return res.status(400).json(errors);
    }
  });
  User.findOne({ email: req.body.email }).then(user => {
    // console.log(req.body);

    if (user) {
      errors.email = "Email already exists";
      console.log("User NF");
      console.log(user);
      return res.status(400).json(errors);
    } else {
      console.log("creating new user");
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            // console.log(err);
          }
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route    GET api/users/login
//@desc     Login User
//@access   Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  //find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //check password

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //Matching User
        const payload = {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber,
          location: user.location
        }; //create jwt payload
        //Sign Token
        jwt.sign(
          payload,
          keys.SecretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password Incorrecrt";
        res.status(400).json(errors);
      }
    });
  });
});

//@route    GET api/users/Current
//@desc     Return Current User
//@access   Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
