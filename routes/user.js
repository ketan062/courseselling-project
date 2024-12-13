const express = require("express");
const { userModel } = require("../db");
const Router = express.Router;
/* or can use
const { Router } = require("express");
*/
const jwt = require("jsonwebtoken");
const JWT_User_password = "ketanuser"
const userRouter = Router();




    userRouter.post("/signup",async function(req,res){
        const { email, password, firstName, lastName } = req.body;// adding zod validation
        // hash the password,pw not stored in db
        // await userModule.create({
        //     email,
        //     password,
        //     firstName,
        //     lastName
        // })
        // put inside try catch  
            await userModel.create({
                email:email,
                password:password,
                firstName:firstName,
                lastName:lastName
            })
        res.json(({
            mess:"signup endpoint"
        }))
        
    })
    userRouter.post("/signin",async function(req,res){
        const { email, password } = req.body;
        const user = await userModel.findone({
            email:email,
            password:password
        })
        if (user){
            const token =jwt.sign({
                    id: user._id
                },JWT_User_password);
            // DO cookie logic
            res.json({
                token:token
            })
        }else{
            res.status(403).json({
                mess:"signup endpoint"
            })
        }
        
    })
    userRouter.get("/purchases",function(req,res){
        res.json(({
            mess:"signup endpoint"
        }))
    })
module.exports = {
    UserRouter: userRouter
}