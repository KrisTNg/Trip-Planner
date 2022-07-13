const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true},
    displayName: String,
    role_id: Number,
    // is_active
});

module.exports = mongoose.model("user", userSchema)



