const mongoose = require('mongoose');
const express= require("express");
const app =express();



// require("dotenv").config();
require("./mongo_connection/mongo");

 const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const bodyparser = require("body-parser");
const auth = require("./route/auth");
const trip = require("./route/trip");
//const setting = require("./routes/setting");
const cookieParser=require('cookie-parser');
require ("./mongo_connection/mongo");


 app.use(cors())
// Middleware configuration
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(bodyparser.json());
app.use(mongoSanitize());
app.use(xss());
app.use(cookieParser());


app.use("/auth/v1", auth);
app.use("/trip/v1", trip);
//app.use("/setting/v1", setting);



  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



