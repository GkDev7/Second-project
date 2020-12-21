const mongodb=require("mongodb")
const { render } = require("../app")

const dbUrl="mongodb+srv://Gopal:UoxPqRqmYBV7GOa0@cluster0-ccc3k.mongodb.net/"


mongodb.connect(dbUrl,(err,serverConnn)=>{

    console.log("serverConected")
    dbConn=serverConnn.db("stdrec")
    console.log("database")
})


insertStd=(req,res,next)=>{
    const stdRec=req.body

    dbConn.collection("stdcollection").insertOne(stdRec,(err,rec)=>{
        res.json({data:[rec],message:"successfully inserted",success:true})
    })
}

deleteStd=(req,res,next)=>{
    const stdRec=req.body

    dbConn.collection("stdcollection").deleteOne(stdRec,(err,rec)=>{
        res.json({data:[rec],message:"successfully deleted",success:true})
    })
}



module.exports={
    insertStd,
    deleteStd
}