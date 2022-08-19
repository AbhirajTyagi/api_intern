const { createUser, getUserByUserId, getUsers, updateUsers, deleteUSer, authentication }=require("./user.controller");
const router=require("express").Router();
const {checkToken}=require("../api/auth/token_validation")


router.post("/",checkToken,createUser);//use to enter the data 
router.get("/",checkToken,getUsers);
router.get("/:id",checkToken,getUserByUserId);
router.patch("/",checkToken,updateUsers);
router.delete("/",checkToken,deleteUSer);
router.post("/login", authentication);

module.exports=router;
