const { Router } = require("express");
const adminRouter= Router();

adminRouter.post("/signup",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
adminRouter.post("/signin",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})