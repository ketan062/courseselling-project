const { Router } = require("express");

const CourseRouter = Router();

    CourseRouter.post("/purchase",function(req,res){
        // you would expect user to pay you money
        res.json(({
            mess:"signup endpoint"
        }))
    })
    CourseRouter.get("/preview",function(req,res){
        res.json(({
            mess:"signup endpoint"
        }))
    })
module.exports = {
    CourseRouter : CourseRouter
}