const express=require("express")
const router=express.Router()


const std=require("../controllers/stdController")


router.post("/insert",std.insertStd)









module.exports=router;