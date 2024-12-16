const express=require('express');
const {login,register}=require('../controller/auth');
const { verifyToken } = require('../controller/auth');
const { getUserByToken } = require('../controller/auth');
const router=express.Router();

router.post("/Login",login);
router.post("/SignUp",register);
router.get('/userSession',verifyToken,getUserByToken);

router.get('/mmn',(req,res)=>
res.send('server running successffuly')
);
module.exports=router;