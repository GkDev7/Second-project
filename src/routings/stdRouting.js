const express=require("express")
const router=express.Router()


const std=require("../controllers/stdController")


router.post("/insert",std.insertStd)


router.post("/delete",std.deleteStd)


router.post("/update", std.updateStd)



module.exports=router;