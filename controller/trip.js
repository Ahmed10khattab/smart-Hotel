const Trip=require('../models/trip');

const addTrip= async (req, res) => {
    try {
      const trip = new Trip(req.body);
      const savedTrip = await trip.save();
      res.status(201).json(savedTrip);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  const getAllTrips= async(req, res) => {
    try {
      const trips = await Trip.find();
      res.json(trips);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  const getTripById =async (req, res) => {
    try {
      const trip = await Trip.findById(req.params.id);
      if (!trip) return res.status(404).json({ error: "Trip not found" });
      res.json(trip);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const updateTrip=  async (req, res) => {
    try {
      const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTrip) return res.status(404).json({ error: "Trip not found" });
      res.json(updatedTrip);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


  const delteOneTrip=async (req, res) => {
    try {
      const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
      if (!deletedTrip) return res.status(404).json({ error: "Trip not found" });
      res.json({ message: "Trip deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  module.exports = { addTrip,getAllTrips,getTripById,updateTrip,delteOneTrip };