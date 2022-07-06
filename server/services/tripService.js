const Trip = require("../models/trip");

function TripService() {
    return {
        showAllTripsByOwnerId : owner_id => Trip.findOne({owner_id: owner_id}),
        add  : data => new Trip(data).save(),
        update: data => Trip.findById(data.id).update(data),
        delete : id => Trip.findByIdAndRemove(id),
        addMemberToTrip : (id,member_id_list) => Trip.findById(id).update({member_id_list:member_id_list})
    };
}

module.exports = TripService();