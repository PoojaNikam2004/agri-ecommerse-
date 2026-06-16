const express = require("express");
const router = express.Router();
const db = require("../config/db");
const {protect} = require("../middleware/authMiddleware");


router.get("/profile",protect,(req,res)=>{

const userId = req.user.id;

const sql = "SELECT id,name,email FROM users WHERE id=?";

db.query(sql,[userId],(err,result)=>{

if(err) return res.status(500).json(err);

res.json(result[0]);

})

})

module.exports = router;