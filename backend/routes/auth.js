const express=require('express');
const User=require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
],(req,res)=>{
    console.log(req.body);
    const user= User(req.body);
    user.save();
    res.json(req.body);
})

module.exports = router;