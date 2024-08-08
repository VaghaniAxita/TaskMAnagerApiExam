const { default: mongoose } = require('mongoose')
const monggose=require('mongoose')

const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017")
    console.log("connect to MongoDB");
    
}

module.exports=dbConnect