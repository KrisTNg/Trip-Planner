const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: Date,
    description: String,
    owner_id:Number,
    user_id_list:[]
    
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;