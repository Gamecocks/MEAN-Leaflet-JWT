const mongoose = require('mongoose');
const config = require('../config/database');

const LocationSchema = mongoose.Schema({
    mmsid: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    callsign: {
        type: String,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    received: {
       type: Date, 
       required: true,
    },
    color: {
        type: String, 
        required: true,
     }
});

//module.exports to call modules from outside
const Location = module.exports = mongoose.model('Location', LocationSchema);

module.exports.addLocation = (newLocation, callback) => {
    Location.findOne({ mmsid: newLocation.mmsid }, (err, discovered)=>{
        if(!discovered){
            newLocation.save (callback);
        }else{
            newLocation.color = discovered.color;
            newLocation.save (callback);
        }
    })          
    }
