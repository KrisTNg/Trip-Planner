const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String
    },
    date:{
        type: Date
    },
    description:{
        type: String
    },
    owner_id:{
        type:Number
    },
    user_id_list:{
        type:Number,
        default : []
    }
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;