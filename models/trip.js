// const mongoose = require('mongoose');

// // Define the schema
// const tripSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true, // Name is mandatory
//     },
//     description: {
//       type: String,
//       required: false, // Optional
//     },
//     startLocation: {
//       type: String,
//       required: true,
//     },
//     destination: {
//       type: String,
//       required: true,
//     },
//     startDate: {
//       type: Date,
//       required: true,
//     },
//     endDate: {
//       type: Date,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     availableSeats: {
//       type: Number,
//       required: true,
//       min: 0, // Ensure seats can't be negative
//     },
//     maxCapacity: {
//       type: Number,
//       required: true,
//       min: 1, // Ensure there's at least 1 participant allowed
//     },
//     // tripType: {
//     //   type: String,
//     //   enum: ["Adventure", "Historical", "Relaxation"], // Example types
//     //   required: true,
//     // },
//     itinerary: [
//       {
//         day: { type: Number, required: true },
//         activities: { type: String, required: true },
//       },
//     ],
//     images: {
//       type: [String], // Array of image URLs
//       required: false,
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId, // Admin ID
//       ref: "Admin", // Reference to Admin collection
//       required: true,
//     },
//     // createdAt: {
//     //   type: Date,
//     //   default: Date.now, // Automatically set creation date
//     // },
//     // updatedAt: {
//     //   type: Date,
//     //   default: Date.now, // Automatically update modification date
//     // },
//     status: {
//       type: String,
//       enum: ["Upcoming", "Completed", "Cancelled"], // Valid statuses
//       default: "Upcoming",
//     },
//     termsAndConditions: {
//       type: String,
//       required: false,
//     },
//     transportationDetails: {
//       type: {
//         type: String, // Transportation type (e.g., Bus)
//         pickupTime: String, // Optional time field
//         pickupLocation: String, // Optional location
//       },
//       required: false,
//     },
//     notes: {
//       type: String,
//       required: false,
//     },
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// // Create the model
// const Trip = mongoose.model('Trip', tripSchema);

// // Export the model
// module.exports = Trip;





const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    startLocation: { type: String, required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true, min: 0 },
    itinerary: [
      {
        day: { type: Number, required: true },
        activities: { type: String, required: true },
      },
    ],
    images: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
    status: { type: String, enum: ["Upcoming", "Completed", "Cancelled"], default: "Upcoming" },
    termsAndConditions: { type: String },
    transportationDetails: {
      type: {
        type: String,
        pickupTime: Date,
        pickupLocation: String,
      },
    },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);



// {
//     "name": "Desert Safari Adventure",
//   "description": "A thrilling desert safari trip with camel rides, dune bashing, and dinner under the stars.",
//   "startLocation": "Dubai City Center",
//   "destination": "Desert Campsite",
//   "startDate": "2024-12-25T08:00:00Z",
//   "endDate": "2024-12-25T20:00:00Z",
//   "price": 120.50,
//   "availableSeats": 25,
//   "maxCapacity": 30,
//   "tripType": "Adventure",
//   "itinerary": [
//     {
//       "day": 1,
//       "activities": "Pick-up from city center, dune bashing, camel rides, and BBQ dinner."
//     },
//     {
//       "day": 2,
//       "activities": "Morning tea, sunrise photography, return to city center."
//     }
//   ],
//   "images": [
//     "https://example.com/image1.jpg",
//     "https://example.com/image2.jpg"
//   ],
//   "createdBy": "647e3e52b91c3a8d8e4f15e1", 
//   "termsAndConditions": "Cancellations must be made 24 hours before the trip to receive a refund.",
//   "transportationDetails": {
//     "type": "Bus",
//     "pickupTime": "07:00 AM",
//     "pickupLocation": "Dubai City Center Terminal"
//   },
//   "notes": "Please bring sunscreen and a hat."
// }