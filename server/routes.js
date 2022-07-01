const { request } = require("express");
const express = require("express");
const tripModel = require("./entity/trip");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/add_trip",async(request,response)=>{
    const trip = new tripModel(request.body);

    try{
        await trip.save();
        response.send(trip);
    }catch(error){
        response.status(500).send(error);
    }
});

app.get("/trips",async(request,response)=>{
    const trip = await tripModel.find({});
    try {
        response.send(trip);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;