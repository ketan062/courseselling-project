const { Router } = require("express");
const adminRouter= Router();

const {adminModel} = require("../db");

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
adminRouter.post("/course",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
adminRouter.put("/course",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})
adminRouter.get("/course/bulk",function(req,res){
    res.json(({
        mess:"signup endpoint"
    }))
})

module.exports = {
    adminRouter:adminRouter
}