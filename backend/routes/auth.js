const express = require("express");
const User = require("../models/users.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

router = express.Router();


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.status(400).send({
      message: "Please fill in all sections.",
    });
  } else {
    try {
      const foundUser = await User.findOne({
        email: req.body.email,
      });

      if (foundUser) {
        try {
          const verifyPassword = await argon2.verify(
            foundUser.password,
            req.body.password
          );

          if (verifyPassword) {
            const user_id = foundUser._id.toString();

            const token = jwt.sign(
              { email: foundUser.email, id: user_id },
              process.env.JSONKEY
              );
              

            res.status(200).json({
              success: true,
              message: "User logged in.",
              token: token,
              userId: foundUser._id,
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Wrong username or password.",
            });
          }
        } catch (e) {
          res.status(500).json({
            success: false,
            message: "Something went wrong.",
          });
        }
      } else {
        res.status(500).json({
          success: false,
          message: "Wrong username or password.",
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
});


router.post("/signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;
console.log(email)
  try {
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      res.status(400).send({
        message: "Email already exists.",
      });
    } else {
      try {
        const hashPassword = await argon2.hash(req.body.password);
        if (password) {
          const user = await User.create({
            fname,
            lname,
            email,
            password: hashPassword,
          });
          await user.save();

          res.status(201).json({
            success: true,
            message: "User signed up.",
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Something went wrong.",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
