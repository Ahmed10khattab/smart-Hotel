const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const authSchema = mongoose.Schema({
 
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type:Boolean , required: true },
 
},
{ timestamps: true }
);
module.exports=mongoose.model('Auth',authSchema)