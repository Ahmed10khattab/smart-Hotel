const express=require('express');
const router=express.Router();
const {verfiyAdmin}=require('../utils/verfiy_user')
const { addTrip, getAllTrips, getTripById, updateTrip, delteOneTrip } = require('../controller/trip');

router.post("/AddTrip",verfiyAdmin,addTrip);
router.get("/GetAllTrips",verfiyAdmin,getAllTrips);
router.get("/GetTripById/:id",verfiyAdmin,getTripById );
router.put("/UpdateTrip/:id",verfiyAdmin,updateTrip );
router.delete("/DeleteOnTripById/:id",verfiyAdmin,delteOneTrip )



module.exports=router;