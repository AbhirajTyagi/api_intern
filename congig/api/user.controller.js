const {create,getUserByUserId,getUsers,updateUser,deleteUSer,getUserByUserName}=require("./user.service");
const{sign}=require("jsonwebtoken");
module.exports={
    createUser:(res,req)=>{
        const body=req.body
        create(body,(err,results)=>
        {
           if (err){
            console.log(err);
            return res.status(500).json({
                sucess:0,
                message:" Datavese connection error"
            });

           }
           return res.status(200).json({
            sucess:1,
            data:results
           });
        });
    },
   getUserByUserId:(req,res)=>{
    const id=req.params.id;
    getUserByUserId(id,(err,results)=>{
     if(err){
        console.log(err);
        return;
     }
     if(!results){
        return res.json({
            scucess:0,
            message:"course not found "
     });
     }
     return res.json({
        scucess:1,
        data:results
     });
    });
   },
    
   getUsers: (req, res) => {
       
        getUsers( (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            

            return res.json({
                scucess: 1,
                data: results
            });
        });
    },
   
    updateUser: (req, res) => {
        const body=req.body;
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    scucess: 0,
                    message: "course not found "
                });
            }
            return res.json({
                scucess: 1,
                message:"udate is done"
            });
        });
    
    },
    deleteUSer: (req, res) => {
        const data = req.body;
        deleteUSer(data , (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    scucess: 0,
                    message: "course not found "
                });
            }
            return res.json({
                scucess: 1,
                message:"course delete sucessfully"
            });
        });
    },
    authentication:(req,res)=>{
      const body=req.body;
      getUserByUserName(body.name,(err,results)=>{
        if(err){
            console.log(err);
        }
        if(!results ){
            return res.json({
                sucess:0,
                data:"invalid"
            });
        }
        if(results){
            const jsontoken=sign({result:results}, "qwe1234",{
         expiresIn:"1h"
            });
            //using this  for the auth.
            return res.json({
                scucess:1,
                message:"you have your token "
            });
        }
      });
    },
};