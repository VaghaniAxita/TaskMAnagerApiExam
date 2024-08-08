const express = require('express')
const dbConnect = require('./config/db')
const app=express()

app.get("/",(req,res)=>{
    res.send({msg:"node js error"})
})
app.listen(8090,()=>{
    console.log("listening on port 8090");
    dbConnect()
})