const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const User=require("../models/Users");

const router=express.Router();

router.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body;
        if(!username && !password){
            res.status(400).json({
                message:"Required feilds"
            });
        }
        const user=await User.findOne({username});

        if(!user){
            return res.status(400).json({
                message:"Invalid Username or password"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"Invalid username and password"
        })
    }

})

module.exports=router;