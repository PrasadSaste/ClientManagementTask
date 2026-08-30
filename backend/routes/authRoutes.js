const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");

const router = express.Router();


router.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;


        // Check required fields
        if (!username || !password) {

            return res.status(400).json({
                message: "Username and password are required"
            });

        }


        // Find user
        const user = await User.findOne({ username });

        if (!user) {

            return res.status(401).json({
                message: "Invalid username or password"
            });

        }


        // Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );


        if (!isPasswordCorrect) {

            return res.status(401).json({
                message: "Invalid username or password"
            });

        }


        // Generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1h"
            }
        );


        // Send response
        return res.status(200).json({

            message: "Login Successful",

            token: token

        });
        

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Error from server side"
        });

    }

});


module.exports = router;