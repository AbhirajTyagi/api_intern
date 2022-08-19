const express= require("express");
const app= express();
const UserRouter=require("./api/users/user.router");

// app.get("/api",(req,res)=>{
//     res.json({ 
//         success:1,
//         message:"done"
//     });
// });
 
///
//taking users as course name ??
/////

app.use(express.json());
app.use("/api/users",UserRouter); 

app.listen(3000,()=>{
    console.log("done")
});