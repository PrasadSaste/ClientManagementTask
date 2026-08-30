const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connDB = require('./config/db');

dotenv.config();

const app=express();

const authRoute=require("./routes/authRoutes");
const clientRoute=require("./routes/clientRoutes");
const schemaRoute=require("./routes/schemaRoutes");


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//routes
app.use('/api/auth',authRoute);

app.use('/api/client',clientRoute);
app.use('/api/schema',schemaRoute);


//DB Connection
connDB();

app.get('/',(req,res)=>{
    console.log("API Are working ");
})
app.listen(process.env.PORT ||5000,()=>{
    console.log("Server is On and Running on 5000");
})