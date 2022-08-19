const pool = require("../../congig/database");
 
module.exports=
{
    create:(data,callBack)=>{
    pool.query(`insert into registrarion (id,name,imageUrl,universityName,facultyprofile,learningHoursAndDuration,price,certificate,eligibiliyCriteria),
    values(?,?,?,?,?,?,?,?)`,
    [
        data.id,
        data.name,
        data.imageUrl,
        data.UniversityName,
        data.facultyProgile,
        data.learningHoursandDuration,
        data.price,
        data.certificate,
        data.celigibilityCriteria
    ],
    (error,results,fields)=>{
        if(error){
            return callBack(error);
        }
        return callBack(null,results); 
    },
    )},

    getUsers:callBack=>{
        pool.query(
            `select id,name,imageUrl,universityName,facultyprofile,learningHoursAndDuration,price,certificate,eligibiliyCriteria`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results); 
            }
        );
     },
     getUserByUserId:(id,callBack)=>{
        pool.query(
            `select  id,name,imageUrl,universityName,facultyprofile,learningHoursAndDuration,price,certificate,eligibiliyCriteria`
          [id],
          (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results[0]);
          }
        );
     
    },
   updateUser:(data,callBack)=>{
    pool.query(
        `update  registreation set id=?, name=?, imageUrl=?, universityName=?, facultyprofile=?, learningHoursAndDuration=?, price=?, certificate=?, eligibiliyCriteria=? where id=?`,
        [
            data.id,
            data.name,
            data.imageUrl,
            data.UniversityName,
            data.facultyProgile,
            data.learningHoursandDuration,
            data.price,
            data.certificate,
            data.celigibilityCriteria
        ],
        (error,results,fields)=>{
            if(error)
            {
                callBack(error);
            }
            return callBack(null,results);
        }
   
        )

   },
   deleteUSer:(data,callBack)=>{
    pool.query( 
        `delete from registration where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error){
             return callBack(eooro);
            }
            return callBack(nul,results[0]);
        }
    )
   },
   //adding this is done so that we can the authentication


   getUserByUserName:(name,callBack)=>{
    pool.query(
        `select * from registration where name=?`,
        [name],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
    );
   },
};
    
