const express = require("express");
const User = require("../models/User");
const router = express.Router();
var bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
var jwt=require('jsonwebtoken');
const fetchuser=require("../middlewares/fetchuser");

const JWT_SECRET="Darpanisagoodboy"
// ROUTE 1 : Create a user using : POST "/api/auth/createuser" . No Login required
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

      const salt = await bcrypt.genSalt(10);
      const secPaass=await bcrypt.hash(req.body.password,salt);
      //Create a new user
      user= await User.create({
        name: req.body.name,
        password: secPaass,
        email: req.body.email,
      })
      const data= {
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET);
      res.json({authtoken});
      //   .then(user => res.json(user)).catch(err=> {console.log(err)
      //   res.json({error: 'Please enter a unique value of email',message:err.message})});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error ");
    }
  }
);
// ROUTE 2 : Authenticate a user using : POST "/api/auth/login" . No Login required
router.post(
  "/LOGIN",
  [
    body("email", "Emter a valid ").isEmail(),
    body("password",'Password cannot be blank').exists(),
  ],
  async (req, res) => {
      //If there are errors return Bad Request and Errors
      const errors = validationResult(req);
      try{
        if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() });
        }
        const {email,password}=req.body;
        let user= await User.findOne({email});
        if(!user){
         return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const passwordCompare= await bcrypt.compare(password,user.password);
        if(!passwordCompare){
         return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const data= {
          user:{
            id: user.id
          }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.json({authtoken});
      }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occured");
      }
  });

// ROUTE 3 : Get loggedin user details using :POST "/api/auth/getuser". Login Required
router.post('/getuser',fetchuser,async (req,res)=>{
  try {
    userId=req.user.id;
    const user= await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
});

module.exports = router;
