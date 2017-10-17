const mongoose = require('mongoose');
const config = require('../config/database');

const LocationLatestSchema = mongoose.Schema({
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

const LocationLatest = module.exports = mongoose.model('LocationLatest', LocationLatestSchema);


module.exports.addLocationLatest = (newLocationLatest, callback) => {
    LocationLatest.findOne({ mmsid: newLocationLatest.mmsid }, (err, discovered)=>{
        if(!discovered){
            newLocationLatest.save (callback);
        }else{
             newLocationLatest.color = discovered.color;
             LocationLatest.remove({ mmsid: newLocationLatest.mmsid }, (err)=>{
                 if (err){
                    throw err;
                 }else{
                    newLocationLatest.save (callback);
                 }
             })
        }
    })
    
}