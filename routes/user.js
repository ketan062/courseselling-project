const express = require("express");
const Router = express.Router;
/* or can use
const { Router } = require("express");
*/
const UserRouter = Router();




    UserRouter.post("/signup",function(req,res){
        res.json(({
            mess:"signup endpoint"
        }))
    })
    UserRouter.post("/signin",function(req,res){
        res.json(({
            mess:"signup endpoint"
        }))
    })
    UserRouter.get("/purchases",function(req,res){
        res.json(({
            mess:"signup endpoint"
        }))
    })
module.exports = {
    UserRouter: UserRouter
}