const express=require('express');
const router = express.Router();

const app= express;
app.use(express.json());
router.post('/',(req,res)=>{
    res.json(obj);
})

module.exports = router