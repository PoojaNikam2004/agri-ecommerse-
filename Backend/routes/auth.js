const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();


// REGISTER
router.post("/register", async (req,res)=>{

const {name,email,password} = req.body;

const hashedPassword = await bcrypt.hash(password,10);

const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

db.query(sql,[name,email,hashedPassword],(err,result)=>{

if(err) return res.status(500).json(err);

res.json({message:"User Registered Successfully"})

})

})


// LOGIN
router.post("/login",(req,res)=>{

const {email,password} = req.body;

const sql = "SELECT * FROM users WHERE email=?";

db.query(sql,[email],async (err,result)=>{

if(err) return res.status(500).json(err);

if(result.length === 0){

return res.status(400).json({message:"User not found"})

}

const user = result[0];

const match = await bcrypt.compare(password,user.password);

if(!match){

return res.status(400).json({message:"Wrong Password"})

}

const token = jwt.sign(

{ id:user.id },

process.env.JWT_SECRET,

{expiresIn:"1d"}

)

res.json({

message:"Login Successful",

token:token,

user:{
id:user.id,
name:user.name,
email:user.email
}
})
})
})

module.exports = router;