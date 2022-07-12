const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    name: String,
    date: Date,
    description: String,
    owner_id:Number,
    user_id_list:[]
});

module.exports = mongoose.model("Trip", TripSchema);