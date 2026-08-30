const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const User = require("./models/Users");

dotenv.config();


const createAdmin=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected Sucessfully");
    

         const hashedPassword=await bcrypt.hash(
            "admin123",10
         )
        const admin= await User.create({
            username:"admin",
            password:hashedPassword

        })
        console.log("Admin Created Sucessfully");
        console.log({
            username:admin.username,
            password:"admin123"
        }
        );
    } catch (error) {
       console.log(error)
        process.exit(1);
    }
}

createAdmin();