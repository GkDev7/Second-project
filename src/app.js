const express=require("express")
const bodyparser=require("body-parser")





const stdRt=require("./routings/stdRouting")
const app=express()



app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
 

app.use("/api/std",stdRt)

module.exports=app



