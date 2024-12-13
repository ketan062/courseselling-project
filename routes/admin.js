const { Router } = require("express");
const adminRouter= Router();
const jwt = require("jsonwebtoken");
const JWT_User_password = "ketanadmin"

const {adminModel} = require("../db");

adminRouter.post("/signup", async function(req,res){
    const { email, password, firstName, lastName } = req.body;// adding zod validation
        // hash the password,pw not stored in db
        // await userModule.create({
        //     email,
        //     password,
        //     firstName,
        //     lastName
        // })
        // put inside try catch  
            await adminModel.create({
                email:email,
                password:password,
                firstName:firstName,
                lastName:lastName
            })
        res.json(({
            mess:"signup endpoint"
        }))
})
adminRouter.post("/signin", async function(req,res){
    const { email, password } = req.body;
        const admin = await adminModel.findone({
            email:email,
            password:password
        })
        if (admin){
            const token =jwt.sign({
                    id: admin._id
                },JWT_Admin_password);
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