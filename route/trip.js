const express=require('express');
const router=express.Router();
const { addTrip, getAllTrips, getTripById, updateTrip, delteOneTrip } = require('../controller/trip');

router.post("/AddTrip",addTrip);
router.get("/GetAllTrips",getAllTrips);
router.get("/GetTripById/:id",getTripById );
router.put("/UpdateTrip/:id",updateTrip );
router.delete("/DeleteOnTripById/:id",delteOneTrip )



module.exports=router;