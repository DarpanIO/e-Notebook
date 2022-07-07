const mongoose= require("mongoose");
const mongoURI= "mongodb://localhost:27017/e-notebook"
const connectToMongo= ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully");
    })
}
module.exports = connectToMongo;