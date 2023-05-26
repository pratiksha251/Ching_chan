const dbconnect = require('./mongodb')
const express = require('express');

const app= express();

app.get('/',async(req,res)=>{
    let result = await dbconnect();
    result=await result.find().toArray();
    res.send(result);
})

app.listen(3000);