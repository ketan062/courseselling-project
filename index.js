const express = require("express");
const app = express();

app.post("/user/signup",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
app.post("/user/signin",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
app.get("/user/purchases",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
app.post("/course/purchase",function(req,res){
    // you would expect user to pay you money
    res.json(({
        mess:"signup endpoint"
    }))
})
app.get("/course/preview",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})




app.listen(3000);