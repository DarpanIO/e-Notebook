const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
//Create a user using : POST "/api/auth/createuser" . No Login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Emter a valid ").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors return Bad Request and Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    //Check whwther user with this Email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry User with this email already exists" });
      }
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      //   .then(user => res.json(user)).catch(err=> {console.log(err)
      //   res.json({error: 'Please enter a unique value of email',message:err.message})});
      res.json({ Nice: "Nice" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
